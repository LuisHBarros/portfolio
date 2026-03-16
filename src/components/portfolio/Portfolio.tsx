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
import { Command } from "@/components/ui/Command"
import { usePortfolioData } from "@/hooks/index"
import { Section } from "@/types"

export function Portfolio() {
  const {
    experiences,
    skills,
    projects,
    posts,
    contact,
    education,
    isLoading: isDataLoading,
    error: dataError,
  } = usePortfolioData()

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

  const renderCurrentSection = () => {
    if (dataError) {
      return (
        <section className="section active" id={displaySection}>
          <Command command="cat error.log" />
          <div style={{ color: "var(--accent-dim)" }}>{dataError}</div>
        </section>
      )
    }

    switch (displaySection) {
      case "home":
        return <HomeSection activeSection={displaySection} contentAnimKey={contentAnimKey} />
      case "experience":
        return (
          <ExperienceSection
            activeSection={displaySection}
            experiences={experiences}
            isLoading={isDataLoading}
            contentAnimKey={contentAnimKey}
          />
        )
      case "skills":
        return (
          <SkillsSection
            activeSection={displaySection}
            skills={skills}
            isLoading={isDataLoading}
            contentAnimKey={contentAnimKey}
          />
        )
      case "projects":
        return (
          <ProjectsSection
            activeSection={displaySection}
            projects={projects}
            isLoading={isDataLoading}
            contentAnimKey={contentAnimKey}
          />
        )
      case "contact":
        return (
          <ContactSection
            activeSection={displaySection}
            contact={contact}
            education={education}
            isLoading={isDataLoading}
            contentAnimKey={contentAnimKey}
          />
        )
      case "posts":
        return (
          <PostsSection
            activeSection={displaySection}
            posts={posts}
            isLoading={isDataLoading}
            contentAnimKey={contentAnimKey}
          />
        )
      default:
        return <HomeSection activeSection={displaySection} contentAnimKey={contentAnimKey} />
    }
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
          renderCurrentSection()
        )}
      </main>
      <Statusbar activeSection={activeSection} />
    </div>
  )
}
