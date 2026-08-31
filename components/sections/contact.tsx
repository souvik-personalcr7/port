"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { personalInfo } from "@/data/personal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-8 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let's build something useful together.
        </h2>
        <p className="text-xl text-muted-foreground">
          Have an opportunity or project in mind? I'm currently open to new opportunities.
        </p>
        
        <div className="pt-8">
          <Link href={`mailto:${personalInfo.socials.email}`} className="group inline-flex items-center justify-center gap-3 px-8 h-14 text-lg rounded-full bg-[#111] border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)] hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] hover:border-red-500/50 transition-all font-semibold text-gray-300 hover:text-white">
            <Mail className="w-5 h-5 group-hover:text-white transition-colors" />
            Say Hello
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
