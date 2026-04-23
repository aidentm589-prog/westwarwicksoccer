import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProgramCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  highlight?: string
  buttonText?: string
  external?: boolean
}

export function ProgramCard({
  title,
  description,
  href,
  icon,
  highlight,
  buttonText = "Learn More",
  external = false,
}: ProgramCardProps) {
  const LinkWrapper = external ? "a" : Link
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href }

  return (
    <Card className="group relative overflow-hidden rounded-[22px] border border-border bg-card shadow-[0_2px_8px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_10px_20px_rgba(15,23,42,0.10)]">
      {highlight && (
        <div className="absolute right-0 top-0 rounded-bl-[16px] bg-primary px-7 py-2 text-[17px] font-medium text-primary-foreground">
          {highlight}
        </div>
      )}
      <CardHeader className="px-8 pb-3 pt-12">
        {icon && (
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[18px] bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <CardTitle className="text-[38px] font-semibold tracking-[-0.03em] leading-[1.1]">{title}</CardTitle>
        <CardDescription className="pt-3 text-[22px] leading-[1.6] text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8 pt-8">
        <Button
          asChild
          variant="outline"
          className="group/btn h-[74px] w-full justify-between rounded-[14px] border-primary/20 bg-background px-7 text-[21px] font-medium hover:bg-primary hover:text-primary-foreground"
        >
          <LinkWrapper {...linkProps}>
            {buttonText}
            <ArrowRight className="h-7 w-7 transition-transform group-hover/btn:translate-x-1" />
          </LinkWrapper>
        </Button>
      </CardContent>
    </Card>
  )
}
