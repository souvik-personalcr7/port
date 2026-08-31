"use client"

import { motion } from "framer-motion"
import { experiences } from "@/data/experience"
import { Briefcase } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 sm:px-8 py-20 bg-muted/30">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Professional Experience</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between w-full">
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              {/* Content Card - Left for even, Right for odd */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0 ${
                  index % 2 === 0 ? "md:ml-auto md:pl-0" : "md:mr-auto md:pr-0 md:text-right"
                }`}
              >
                <div className={`bg-background border border-border p-6 rounded-xl shadow-sm relative transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-sm font-medium text-primary">{exp.date}</span>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-muted-foreground">{exp.company} • {exp.location}</span>
                  </div>
                  <ul className={`space-y-2 text-muted-foreground text-sm ${
                    index % 2 === 0 ? "text-left list-disc list-outside ml-4" : "md:text-right list-none"
                  }`}>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className={index % 2 !== 0 ? "md:mb-2" : ""}>
                        {index % 2 !== 0 && <span className="hidden md:inline mr-2">•</span>}
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
