"use client"

import { useLanguage } from "@/hooks/index"
import { useSkills } from "@/hooks/index"
import { Command } from "@/components/ui/Command"

export function SkillsSection({ activeSection }: { activeSection: string }) {
  const { lang } = useLanguage()
  const { data: skills, isLoading } = useSkills()

  if (isLoading) {
    return (
      <section className="section" id="skills">
        <Command command="ls -la skills/" />
        <div style={{ color: "var(--accent-dim)" }}>Loading skills...</div>
      </section>
    )
  }

  return (
    <section id="skills" className={activeSection === "skills" ? "section active" : "section"}>
      <Command command="ls <span class='flag'>-la</span> skills/" />
      <div className="skills-grid">
        {skills.map((category) => (
          <div key={category.id} className="skill-cat">
            <div className="skill-cat-title">{lang === "en" ? category.keyEn : category.keyPt}</div>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill.id} className={`tag ${skill.isPrimary ? "primary" : ""}`}>
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
