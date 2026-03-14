"use client"

import { useLanguage } from "@/hooks/index"
import { useProjects } from "@/hooks/index"
import { Command } from "@/components/ui/Command"

export function ProjectsSection({ activeSection }: { activeSection: string }) {
  const { lang } = useLanguage()
  const { data: projects, isLoading } = useProjects()

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
      {projects.map((project) => (
        <div key={project.id} className="proj-entry">
          <div className="proj-header">
            <div>
              <div className="proj-title">{lang === "en" ? project.titleEn : project.titlePt}</div>
              <div className="proj-sub">{lang === "en" ? project.subEn : project.subPt}</div>
            </div>
            {project.githubUrl && (
              <div className="proj-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  ⇗ github
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
    </section>
  )
}
