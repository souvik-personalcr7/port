"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, Terminal } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"

import { buttonVariants } from "@/components/ui/button"
import { personalInfo } from "@/data/personal"
import { cn } from "@/lib/utils"

export function Hero() {
  const [firstName, lastName] = personalInfo.name.split(' ')

  return (
    <section className="relative w-full bg-[#050505] text-white overflow-hidden pb-0 md:pt-16 lg:pt-20">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Watermark */}
      <div className="absolute top-[20%] md:top-1/2 left-0 md:-translate-y-1/2 text-[10rem] sm:text-[15rem] md:text-[25rem] lg:text-[30rem] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0 tracking-tighter leading-none">
        MERN
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
        {/* Left Content: Text */}
        <div className="flex-1 w-full pt-12 md:pt-0 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <span className="text-red-500 font-bold text-lg md:text-xl tracking-wider mb-2">
              I'm
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9]">
              {firstName}
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              {lastName || 'Das'}.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 sm:mt-24 md:mt-32 flex flex-col xl:flex-row xl:items-center gap-8 justify-between"
          >
            <div>
              <p className="text-gray-400 text-sm font-medium tracking-wide mb-1">
                FeelFree To Contact Me
              </p>
              <a href={`mailto:${personalInfo.socials.email}`} className="text-lg md:text-xl font-medium hover:text-red-400 transition-colors">
                {personalInfo.socials.email}
              </a>
            </div>

            <Link 
              href="/resume/resume.pdf" 
              target="_blank" 
              className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-[#111] border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)] hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] hover:border-red-500/50 transition-all w-fit"
            >
              <Download className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              <span className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors">
                Download My Resume
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right Content: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end w-full md:w-auto md:mt-0"
        >
          <div className="relative w-full h-[400px] sm:h-[500px] md:w-[400px] lg:w-[500px] lg:h-[700px] mx-0 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden rounded-[2rem]">
            <Image 
              src="/Profile picture.jpeg" 
              alt={personalInfo.name} 
              fill 
              className="object-cover object-top" 
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
