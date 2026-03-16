"use client"

import { useLanguage } from "@/hooks/index"
import { useSkills } from "@/hooks/index"
import { Command } from "@/components/ui/Command"
import { AnimatedContent } from "@/components/ui/AnimatedContent"

interface SkillsSectionProps {
  activeSection: string
  contentAnimKey?: number
}

export function SkillsSection({ activeSection, contentAnimKey = 0 }: SkillsSectionProps) {
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
      <AnimatedContent animateKey={contentAnimKey}>
        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.id} className="skill-cat anim-line">
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
      </AnimatedContent>
    </section>
  )
}
