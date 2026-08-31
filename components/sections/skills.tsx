"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/skills"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const categories = [
    { title: "Frontend Development", data: skills.frontend },
    { title: "Backend & APIs", data: skills.backend },
    { title: "Database & State Management", data: [...skills.database, ...skills.stateManagement] },
    { title: "Tools & Deployment", data: skills.tools },
  ]

  return (
    <section id="skills" className="container mx-auto px-4 sm:px-8 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Skills</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A comprehensive toolkit for building modern, scalable web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full border border-border bg-muted/10 transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.data.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="px-3 py-1 text-sm bg-background">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
