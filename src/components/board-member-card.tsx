import { Mail, User } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface BoardMemberCardProps {
  name: string
  role: string
  email?: string
}

export function BoardMemberCard({ name, role, email }: BoardMemberCardProps) {
  return (
    <Card className="text-center transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
          <User className="h-10 w-10" />
        </div>
      </CardHeader>
      <CardContent className="space-y-1">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
        )}
      </CardContent>
    </Card>
  )
}
