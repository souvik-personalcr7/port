"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/personal"

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am a results-driven {personalInfo.title} based in {personalInfo.location}. 
            {personalInfo.summary.replace("MERN Stack Developer with", "With")}
          </p>
          <p>
            My expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern Next.js development. 
            I specialize in building responsive user interfaces, integrating RESTful APIs, implementing secure authentication, 
            and optimizing application performance to deliver fast, accessible, and user-centric web experiences.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
