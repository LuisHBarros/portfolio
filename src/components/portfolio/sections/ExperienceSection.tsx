"use client"

import { useLanguage } from "@/hooks/index"
import { useExperiences } from "@/hooks/index"
import { Command } from "@/components/ui/Command"
import { AnimatedContent } from "@/components/ui/AnimatedContent"

interface ExperienceSectionProps {
  activeSection: string
  contentAnimKey?: number
}

export function ExperienceSection({ activeSection, contentAnimKey = 0 }: ExperienceSectionProps) {
  const { lang } = useLanguage()
  const { data: experiences, isLoading } = useExperiences()

  if (isLoading) {
    return (
      <section className="section" id="experience">
        <Command command="cat work_history.log" />
        <div style={{ color: "var(--accent-dim)" }}>Loading experiences...</div>
      </section>
    )
  }

  return (
    <section
      id="experience"
      className={activeSection === "experience" ? "section active" : "section"}
    >
      <Command command="cat work_history.log" />
      <AnimatedContent animateKey={contentAnimKey}>
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-entry anim-line">
            <div className="exp-header">
              <div className="exp-title">{lang === "en" ? exp.titleEn : exp.titlePt}</div>
              <div className="exp-date">{lang === "en" ? exp.dateEn : exp.datePt}</div>
            </div>
            <div className="exp-company">
              {exp.company} - <span className="loc">{exp.location}</span>
            </div>
            <ul className="exp-bullets">
              {exp.bullets.map((bullet) => (
                <li key={bullet.id}>{lang === "en" ? bullet.textEn : bullet.textPt}</li>
              ))}
            </ul>
          </div>
        ))}
      </AnimatedContent>
    </section>
  )
}
