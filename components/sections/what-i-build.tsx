"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/personal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, MonitorSmartphone, Server, Zap } from "lucide-react"

const icons = [Layers, MonitorSmartphone, Server, Zap]

export function WhatIBuild() {
  return (
    <section className="container mx-auto px-4 sm:px-8 py-20 bg-muted/30">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">What I Build</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Specialized expertise in delivering end-to-end web solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {personalInfo.whatIBuild.map((item, index) => {
          const Icon = icons[index % icons.length]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
