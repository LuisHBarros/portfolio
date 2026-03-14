"use client"

import { useState, useRef } from "react"
import { Titlebar } from "@/components/portfolio/Titlebar"
import { Sidebar } from "@/components/portfolio/Sidebar"
import { Statusbar } from "@/components/portfolio/Statusbar"
import { HomeSection } from "@/components/portfolio/sections/HomeSection"
import { ExperienceSection } from "@/components/portfolio/sections/ExperienceSection"
import { SkillsSection } from "@/components/portfolio/sections/SkillsSection"
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection"
import { ContactSection } from "@/components/portfolio/sections/ContactSection"
import { PostsSection } from "@/components/portfolio/sections/PostsSection"
import { Section } from "@/types"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home") // 👈 Section, não string
  const mainRef = useRef<HTMLDivElement>(null)

  const handleSectionChange = (section: Section) => {
    setActiveSection(section)
    if (mainRef.current) {
      mainRef.current.scrollTop = 0
    }
  }

  return (
    <div className="terminal">
      <Titlebar />
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main className="main" ref={mainRef}>
        <HomeSection activeSection={activeSection} />
        <ExperienceSection activeSection={activeSection} />
        <SkillsSection activeSection={activeSection} />
        <ProjectsSection activeSection={activeSection} />
        <ContactSection activeSection={activeSection} />
        <PostsSection activeSection={activeSection} />
      </main>
      <Statusbar activeSection={activeSection} />
    </div>
  )
}
