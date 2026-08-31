"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { personalInfo } from "@/data/personal"

const routes = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
              SD.
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`transition-colors hover:text-foreground/80 ${
                pathname === route.href || (pathname === "/" && route.href !== "/" && false /* We can't really track hash active state easily without observer, keep simple */)
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              {route.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l pl-6 ml-2">
            <ThemeToggle />
            <Link href="/resume/resume.pdf" target="_blank" className={cn(buttonVariants({ variant: "default", size: "sm" }), "hidden lg:flex")}>
              Resume
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu" />}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-1 text-lg font-medium hover:text-primary transition-colors"
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="mt-4 px-2">
                  <Link href="/resume/resume.pdf" target="_blank" onClick={() => setIsOpen(false)} className={cn(buttonVariants({ variant: "default" }), "w-full")}>
                    Download Resume
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
