import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { WhatIBuild } from "@/components/sections/what-i-build"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Education } from "@/components/sections/education"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <WhatIBuild />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
