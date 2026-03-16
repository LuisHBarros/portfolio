"use client"

import { useLanguage } from "@/hooks/index"
import { Command } from "@/components/ui/Command"
import { AnimatedContent } from "@/components/ui/AnimatedContent"
import { ContactInfo, Education } from "@/types"

interface ContactSectionProps {
  activeSection: string
  contact: ContactInfo[]
  education: Education[]
  isLoading?: boolean
  contentAnimKey?: number
}

export function ContactSection({
  activeSection,
  contact,
  education,
  isLoading = false,
  contentAnimKey = 0,
}: ContactSectionProps) {
  const { lang, translations } = useLanguage()

  if (isLoading) {
    return (
      <section className="section" id="contact">
        <Command command="cat contact.json" />
        <div style={{ color: "var(--accent-dim)" }}>Loading contact info...</div>
      </section>
    )
  }

  return (
    <section id="contact" className={activeSection === "contact" ? "section active" : "section"}>
      <Command command="cat contact.json" />
      <AnimatedContent animateKey={contentAnimKey}>
        <div className="contact-grid">
          {contact.map((item) => (
            <div key={item.id} className="contact-item anim-line">
              <div className="contact-label">{lang === "en" ? item.labelEn : item.labelPt}</div>
              <div className="contact-val">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="sep anim-line"></div>
        <div className="edu-cert-grid">
          {education.map((edu) => (
            <div key={edu.id} className="edu-item anim-line">
              <span className={`edu-badge ${edu.badge === "CERT" ? "cert" : ""}`}>{edu.badge}</span>
              <div className="edu-title">{lang === "en" ? edu.titleEn : edu.titlePt}</div>
              <div className="edu-sub">{lang === "en" ? edu.subEn : edu.subPt}</div>
            </div>
          ))}
        </div>
        <div className="sep anim-line"></div>
        <a className="cta-btn cta-primary anim-line" href="mailto:me@luisbarros.dev">
          {translations?.cta_reach}
        </a>
      </AnimatedContent>
    </section>
  )
}
