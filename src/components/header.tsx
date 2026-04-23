"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/site-logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Programs",
    href: "#",
    children: [
      { name: "Spring 2026", href: "/spring-soccer-2026" },
      { name: "Rec Soccer", href: "/rec-soccer" },
      { name: "Competitive Soccer", href: "/competitive-soccer-programs" },
      { name: "Outdoor Competitive", href: "/competitive-soccer-programs/outdoor" },
      { name: "Indoor Competitive", href: "/competitive-soccer-programs/indoor" },
      { name: "Referee Program", href: "/referee-program" },
      { name: "Training Camps", href: "/training-camps" },
    ],
  },
  {
    name: "About",
    href: "#",
    children: [
      { name: "About Us", href: "/about" },
      { name: "Executive Board", href: "/executive-board" },
      { name: "Board of Directors", href: "/board-of-directors" },
      { name: "Volunteers", href: "/volunteers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    children: [
      { name: "Gallery", href: "/gallery" },
      { name: "Program Options", href: "/program-options" },
      { name: "Sponsors", href: "/sponsors" },
      { name: "Sponsorship Options", href: "/sponsorship-options" },
      { name: "Book Award", href: "/book-award" },
      { name: "Shop Fan Gear", href: "/shop-fan-gear" },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <nav className="mx-auto flex max-w-[1580px] items-center justify-between px-6 py-[18px] lg:px-12">
        <div className="flex items-center gap-4">
          <SiteLogo imageSize={58} />
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-5">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1.5 rounded-md px-3 py-2 text-[20px] font-medium text-foreground transition-colors hover:text-primary">
                    {item.name}
                    <ChevronDown className="mt-0.5 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href} className="w-full text-[15px]">
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-[20px] font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden h-[45px] rounded-[10px] px-8 text-[19px] font-medium sm:inline-flex">
            <a
              href="https://system.gotsport.com/programs/265J58760"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-md p-2 text-foreground hover:bg-muted lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="space-y-1">
                  <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                    {item.name}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block rounded-md px-6 py-2 text-sm text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-3">
              <Button asChild className="w-full">
                <a
                  href="https://system.gotsport.com/programs/265J58760"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
