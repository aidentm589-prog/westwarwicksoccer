import Image from "next/image"
import Link from "next/link"

type SiteLogoProps = {
  compact?: boolean
  imageSize?: number
  textClassName?: string
  subtextClassName?: string
  href?: string
}

export function SiteLogo({
  compact = false,
  imageSize = 56,
  textClassName = "text-[26px] font-bold leading-none tracking-[-0.02em] text-foreground",
  subtextClassName = "mt-[6px] text-[15px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
  href = "/",
}: SiteLogoProps) {
  return (
    <Link href={href} className="flex items-center gap-4">
      <Image
        src="/wwsa-logo.png"
        alt="West Warwick Soccer Association logo"
        width={imageSize}
        height={imageSize}
        className="rounded-full object-cover"
        priority
      />
      {!compact ? (
        <div className="hidden sm:block">
          <p className={textClassName}>West Warwick</p>
          <p className={subtextClassName}>Soccer Association</p>
        </div>
      ) : null}
    </Link>
  )
}
