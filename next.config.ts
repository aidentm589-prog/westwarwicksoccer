import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/spring-2026", destination: "/spring-soccer-2026", permanent: true },
      { source: "/travel-soccer", destination: "/competitive-soccer-programs", permanent: true },
      { source: "/blank-page-1", destination: "/rec-soccer", permanent: true },
      { source: "/blank-page-2", destination: "/competitive-soccer-programs/outdoor", permanent: true },
      { source: "/blank-page-3", destination: "/competitive-soccer-programs/indoor", permanent: true },
      { source: "/blank-page-4", destination: "/soccer-payments", permanent: true },
      { source: "/blank-page-5", destination: "/training-camps", permanent: true },
      { source: "/blank-page-7", destination: "/volunteers", permanent: true },
      { source: "/blank-page-8", destination: "/book-award", permanent: true },
      { source: "/blank-page-9", destination: "/spring-soccer-2026", permanent: true },
      { source: "/blank-page-10", destination: "/shop-fan-gear", permanent: true },
      { source: "/blank-page-11", destination: "/competitive-soccer-programs", permanent: true },
      { source: "/2025-2026-competitive-tryouts", destination: "/competitive-program-2025-2026", permanent: true },
      { source: "/competitve-soccer-tryouts-copy", destination: "/competitive-tryouts-archive", permanent: true },
    ];
  },
};

export default nextConfig;
