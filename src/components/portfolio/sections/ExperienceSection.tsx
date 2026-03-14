"use client"

import { useLanguage } from "@/hooks/index"
import { useExperiences } from "@/hooks/index"
import { Command } from "@/components/ui/Command"

export function ExperienceSection({ activeSection }: { activeSection: string }) {
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
      {experiences.map((exp) => (
        <div key={exp.id} className="exp-entry">
          <div className="exp-header">
            <div className="exp-title">{lang === "en" ? exp.titleEn : exp.titlePt}</div>
            <div className="exp-date">{lang === "en" ? exp.dateEn : exp.datePt}</div>
          </div>
          <div className="exp-company">
            {exp.company} · <span className="loc">{exp.location}</span>
          </div>
          <ul className="exp-bullets">
            {exp.bullets.map((bullet) => (
              <li key={bullet.id}>{lang === "en" ? bullet.textEn : bullet.textPt}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
