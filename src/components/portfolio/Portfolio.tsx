"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Titlebar } from "@/components/portfolio/Titlebar"
import { Sidebar } from "@/components/portfolio/Sidebar"
import { Statusbar } from "@/components/portfolio/Statusbar"
import { HomeSection } from "@/components/portfolio/sections/HomeSection"
import { ExperienceSection } from "@/components/portfolio/sections/ExperienceSection"
import { SkillsSection } from "@/components/portfolio/sections/SkillsSection"
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection"
import { ContactSection } from "@/components/portfolio/sections/ContactSection"
import { PostsSection } from "@/components/portfolio/sections/PostsSection"
import { TerminalTypingTransition } from "@/components/portfolio/TerminalTypingTransition"
import { Section } from "@/types"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home")
  const [displaySection, setDisplaySection] = useState<Section>("home")
  const [transitionSection, setTransitionSection] = useState<Section>("home")
  const [contentAnimKey, setContentAnimKey] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionKey, setTransitionKey] = useState(0)
  const [isMotionReady, setIsMotionReady] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const activeSectionRef = useRef<Section>("home")

  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  const startTransition = useCallback((section: Section) => {
    setTransitionSection(section)
    setIsTransitioning(true)
    setTransitionKey((prev) => prev + 1)
  }, [])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")

    const syncMotionPreference = () => {
      setPrefersReducedMotion(media.matches)
      if (media.matches) {
        setDisplaySection(activeSectionRef.current)
        setContentAnimKey((prev) => prev + 1)
        setIsTransitioning(false)
      }
      setIsMotionReady(true)
    }

    syncMotionPreference()
    if (!media.matches) {
      startTransition(activeSectionRef.current)
    }

    media.addEventListener("change", syncMotionPreference)

    return () => media.removeEventListener("change", syncMotionPreference)
  }, [startTransition])

  const handleSectionChange = (section: Section) => {
    if (section === activeSection) return

    setActiveSection(section)
    if (mainRef.current) {
      mainRef.current.scrollTop = 0
    }

    if (!isMotionReady || prefersReducedMotion) {
      setDisplaySection(section)
      setContentAnimKey((prev) => prev + 1)
      setIsTransitioning(false)
      return
    }

    startTransition(section)
  }

  return (
    <div className="terminal">
      <Titlebar />
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main className={`main ${isTransitioning ? "is-transitioning" : ""}`} ref={mainRef}>
        {!isMotionReady ? null : isTransitioning ? (
          <TerminalTypingTransition
            key={`${transitionSection}-${transitionKey}`}
            section={transitionSection}
            durationMs={800}
            onComplete={() => {
              setDisplaySection(transitionSection)
              setContentAnimKey((prev) => prev + 1)
              setIsTransitioning(false)
            }}
          />
        ) : (
          <>
            <HomeSection activeSection={displaySection} contentAnimKey={contentAnimKey} />
            <ExperienceSection activeSection={displaySection} contentAnimKey={contentAnimKey} />
            <SkillsSection activeSection={displaySection} contentAnimKey={contentAnimKey} />
            <ProjectsSection activeSection={displaySection} contentAnimKey={contentAnimKey} />
            <ContactSection activeSection={displaySection} contentAnimKey={contentAnimKey} />
            <PostsSection activeSection={displaySection} contentAnimKey={contentAnimKey} />
          </>
        )}
      </main>
      <Statusbar activeSection={activeSection} />
    </div>
  )
}
