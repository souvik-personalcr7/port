import Link from "next/link"
import { Mail } from "lucide-react"
import { Github, Linkedin, Whatsapp } from "@/components/icons"
import { personalInfo } from "@/data/personal"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40 py-8 md:py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Souvik Das
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
            {personalInfo.title} specializing in building scalable web applications.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href={personalInfo.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href={personalInfo.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <a 
            href={`mailto:${personalInfo.socials.email}`} 
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href={personalInfo.socials.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="WhatsApp"
          >
            <Whatsapp className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-8 mt-8 text-center md:text-left text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
        <p>© {currentYear} Souvik Das. All rights reserved.</p>
        
      </div>
    </footer>
  )
}
