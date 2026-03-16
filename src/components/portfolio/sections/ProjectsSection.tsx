"use client"

import { useLanguage } from "@/hooks/index"
import { Command } from "@/components/ui/Command"
import { AnimatedContent } from "@/components/ui/AnimatedContent"
import { Project } from "@/types"

interface ProjectsSectionProps {
  activeSection: string
  projects: Project[]
  isLoading?: boolean
  contentAnimKey?: number
}

export function ProjectsSection({
  activeSection,
  projects,
  isLoading = false,
  contentAnimKey = 0,
}: ProjectsSectionProps) {
  const { lang } = useLanguage()

  if (isLoading) {
    return (
      <section className="section" id="projects">
        <Command command="git log --oneline --all" />
        <div style={{ color: "var(--accent-dim)" }}>Loading projects...</div>
      </section>
    )
  }

  return (
    <section id="projects" className={activeSection === "projects" ? "section active" : "section"}>
      <Command command="git log --oneline --all" />
      <AnimatedContent animateKey={contentAnimKey}>
        {projects.map((project) => (
          <div key={project.id} className="proj-entry anim-line">
            <div className="proj-header">
              <div>
                <div className="proj-title">{lang === "en" ? project.titleEn : project.titlePt}</div>
                <div className="proj-sub">{lang === "en" ? project.subEn : project.subPt}</div>
              </div>
              {project.githubUrl && (
                <div className="proj-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    {"-> github"}
                  </a>
                </div>
              )}
            </div>
            <ul className="proj-bullets">
              {project.bullets.map((bullet) => (
                <li key={bullet.id}>{lang === "en" ? bullet.textEn : bullet.textPt}</li>
              ))}
            </ul>
            <div className="proj-tags">
              {project.tags.map((tag) => (
                <span key={tag.id} className="proj-tag">
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </AnimatedContent>
    </section>
  )
}
