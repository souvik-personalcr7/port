"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/personal"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section className="container mx-auto px-4 sm:px-8 py-20 bg-muted/30">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personalInfo.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background border border-border p-6 rounded-xl shadow-sm flex items-start gap-4 transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]"
          >
            <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="text-sm font-medium text-primary mt-2">{edu.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
