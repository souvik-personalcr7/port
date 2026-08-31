import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Github } from "@/components/icons"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title.split("—")[0].trim()} | Case Study`,
    description: project.shortDescription,
  }
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 sm:px-8 py-20 max-w-4xl">
      <div className="mb-8">
        <Link href="/#projects" className={cn(buttonVariants({ variant: "ghost" }), "mb-8 -ml-4 text-muted-foreground hover:text-foreground")}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title.split("—")[0].trim()}</h1>
        <p className="text-xl text-primary font-medium mb-6">{project.title.split("—")[1]?.trim()}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-muted/50 text-sm py-1 px-3">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {project.links.live && (
            <Link href={project.links.live} target="_blank" className={cn(buttonVariants({ variant: "default" }), "gap-2")}>
              <ExternalLink className="w-4 h-4" /> Live Demo
            </Link>
          )}
          {project.links.github && (
            <Link href={project.links.github} target="_blank" className={cn(buttonVariants({ variant: "outline" }), "gap-2")}>
              <Github className="w-4 h-4" /> View Source
            </Link>
          )}
        </div>
      </div>

      <div className="aspect-video bg-muted rounded-xl mb-16 flex items-center justify-center border border-muted/50 overflow-hidden relative">
         <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
         <div className="text-muted-foreground text-2xl font-bold opacity-50 z-0">
           Project Screenshot Placeholder
         </div>
      </div>

      <div className="space-y-12 prose prose-zinc dark:prose-invert max-w-none">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview & Problem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.caseStudy.problem}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.caseStudy.solution}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-lg">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Architecture & Tech Stack</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.caseStudy.architecture}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Challenges & Learnings</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.caseStudy.challenges}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Outcome</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.caseStudy.outcome}
          </p>
        </section>
      </div>
    </article>
  )
}
