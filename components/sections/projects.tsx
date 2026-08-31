"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Github } from "@/components/icons"

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 py-20">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A selection of my recent work, focusing on scalable full-stack applications.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className={`overflow-hidden border border-border transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] group ${index === 0 ? "shadow-[0_0_15px_rgba(239,68,68,0.15)] border-red-500/40" : ""}`}>
              <div className={`flex flex-col ${index === 0 ? "lg:flex-row" : "md:flex-row"} h-full`}>
                
                {/* Project Image */}
                <div className={`${index === 0 ? "lg:w-1/2" : "md:w-5/12"} bg-muted relative overflow-hidden flex items-center justify-center aspect-video md:aspect-auto md:min-h-[300px]`}>
                  {project.thumbnail ? (
                    <Image 
                      src={project.thumbnail} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="text-muted-foreground text-xl font-bold opacity-50 z-0">
                      {project.title.split("—")[0].trim()} Preview
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
                </div>

                {/* Project Content */}
                <div className={`${index === 0 ? "lg:w-1/2" : "md:w-7/12"} p-6 sm:p-8 flex flex-col justify-center`}>
                  <h3 className={`${index === 0 ? "text-3xl" : "text-2xl"} font-bold mb-2 group-hover:text-primary transition-colors`}>
                    {project.title.split("—")[0].trim()}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {project.title.split("—")[1]?.trim()}
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-muted/50">
                    <Link href={`/projects/${project.slug}`} className={cn(buttonVariants(), "gap-2")}>
                      Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                    
                    {project.links.live && (
                      <Link href={project.links.live} target="_blank" className={buttonVariants({ variant: "outline", size: "icon" })} aria-label="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                    
                    {project.links.github && (
                      <Link href={project.links.github} target="_blank" className={buttonVariants({ variant: "outline", size: "icon" })} aria-label="GitHub Repository">
                        <Github className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
