import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-[44px] font-bold tracking-[-0.04em] text-foreground sm:text-[62px] leading-[1.05] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-8 text-[28px] leading-[1.45] text-muted-foreground text-pretty sm:text-[30px]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
