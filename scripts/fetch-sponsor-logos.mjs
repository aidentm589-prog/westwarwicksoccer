import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = new URL("..", import.meta.url);
const sourcePath = new URL("../src/data/sponsors-source.json", import.meta.url);
const outputDir = new URL("../public/sponsors", import.meta.url);
const manifestPath = new URL("../src/data/sponsors.generated.json", import.meta.url);

const sponsors = JSON.parse(await fs.readFile(sourcePath, "utf8"));

const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36";

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function toAbsolute(url, value) {
  try {
    return new URL(value, url).toString();
  } catch {
    return null;
  }
}

function extFromContentType(contentType) {
  const normalized = contentType.split(";")[0].trim().toLowerCase();
  if (normalized === "image/svg+xml") return ".svg";
  if (normalized === "image/png") return ".png";
  if (normalized === "image/jpeg") return ".jpg";
  if (normalized === "image/webp") return ".webp";
  if (normalized === "image/avif") return ".avif";
  if (normalized === "image/x-icon" || normalized === "image/vnd.microsoft.icon") return ".ico";
  return null;
}

function extFromUrl(url) {
  try {
    const pathname = new URL(url).pathname.toLowerCase();
    const match = pathname.match(/\.(svg|png|jpe?g|webp|avif|ico)$/);
    return match ? `.${match[1] === "jpeg" ? "jpg" : match[1]}` : null;
  } catch {
    return null;
  }
}

function getMatches(html, regex, mapper = (match) => match[1]) {
  return [...html.matchAll(regex)].map(mapper).filter(Boolean);
}

function scoreCandidate(candidate) {
  const value = candidate.toLowerCase();
  let score = 0;
  if (value.includes("logo")) score += 8;
  if (value.includes("brand")) score += 4;
  if (value.includes("header")) score += 3;
  if (value.includes("navbar")) score += 3;
  if (value.includes("icon")) score += 1;
  if (value.endsWith(".svg")) score += 6;
  if (value.endsWith(".png")) score += 4;
  if (value.includes("facebook")) score -= 1;
  if (value.includes("cover")) score -= 2;
  if (value.includes("hero")) score -= 3;
  return score;
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": userAgent, accept: "text/html,application/xhtml+xml" },
    redirect: "follow",
  });
  if (!response.ok) throw new Error(`Failed to fetch HTML (${response.status})`);
  return { html: await response.text(), finalUrl: response.url };
}

async function fetchBuffer(url) {
  const response = await fetch(url, {
    headers: { "user-agent": userAgent, accept: "image/*,*/*;q=0.8", referer: url },
    redirect: "follow",
  });
  if (!response.ok) throw new Error(`Failed to download asset (${response.status})`);
  const arrayBuffer = await response.arrayBuffer();
  return {
    buffer: Buffer.from(arrayBuffer),
    contentType: response.headers.get("content-type") ?? "application/octet-stream",
    finalUrl: response.url,
  };
}

async function pickLogo(sponsor) {
  try {
    const { html, finalUrl } = await fetchText(sponsor.url);

    const og = getMatches(
      html,
      /<meta[^>]+(?:property|name)=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/gi
    ).map((value) => toAbsolute(finalUrl, value));

    const apple = getMatches(
      html,
      /<link[^>]+rel=["'][^"']*apple-touch-icon[^"']*["'][^>]+href=["']([^"']+)["'][^>]*>/gi
    ).map((value) => toAbsolute(finalUrl, value));

    const icons = getMatches(
      html,
      /<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]+href=["']([^"']+)["'][^>]*>/gi
    ).map((value) => toAbsolute(finalUrl, value));

    const imgs = getMatches(
      html,
      /<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi,
      (match) => match[1]
    )
      .filter((value) => /logo|brand|header|navbar|site/i.test(value))
      .map((value) => toAbsolute(finalUrl, value))
      .sort((a, b) => scoreCandidate(b) - scoreCandidate(a));

    const candidates = unique([...og, ...apple, ...icons, ...imgs]);

    for (const candidate of candidates) {
      if (!candidate) continue;
      try {
        const { buffer, contentType, finalUrl: assetUrl } = await fetchBuffer(candidate);
        const ext = extFromContentType(contentType) ?? extFromUrl(assetUrl) ?? ".png";
        const filename = `${sponsor.slug}${ext}`;
        await fs.writeFile(new URL(`../public/sponsors/${filename}`, import.meta.url), buffer);
        return {
          logoSrc: `/sponsors/${filename}`,
          logoSourceUrl: assetUrl,
          strategy: og.includes(candidate)
            ? "og:image"
            : apple.includes(candidate)
              ? "apple-touch-icon"
              : icons.includes(candidate)
                ? "icon"
                : "logo-image",
        };
      } catch {
        // Try the next candidate.
      }
    }

    return { logoSrc: null, logoSourceUrl: null, strategy: "fallback" };
  } catch (error) {
    return {
      logoSrc: null,
      logoSourceUrl: null,
      strategy: "fallback",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

await fs.mkdir(outputDir, { recursive: true });

const results = [];
for (const sponsor of sponsors) {
  process.stdout.write(`Fetching logo for ${sponsor.name}...\n`);
  const logo = await pickLogo(sponsor);
  results.push({
    ...sponsor,
    ...logo,
    logoAlt: `${sponsor.name} logo`,
  });
}

await fs.writeFile(manifestPath, JSON.stringify(results, null, 2) + "\n");
process.stdout.write(`Wrote ${results.length} sponsors to ${path.relative(new URL(".", projectRoot).pathname, manifestPath.pathname)}\n`);
