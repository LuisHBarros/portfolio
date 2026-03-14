"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/index"
import { useContact, useEducation } from "@/hooks/index"
import { Command } from "@/components/ui/Command"

export function ContactSection({ activeSection }: { activeSection: string }) {
  const { lang, translations } = useLanguage()
  const { data: contact, isLoading: contactLoading } = useContact()
  const { data: education, isLoading: eduLoading } = useEducation()

  if (contactLoading || eduLoading) {
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
      <div className="contact-grid">
        {contact.map((item) => (
          <div key={item.id} className="contact-item">
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
      <div className="sep"></div>
      <div className="edu-cert-grid">
        {education.map((edu) => (
          <div key={edu.id} className="edu-item">
            <span className={`edu-badge ${edu.badge === "CERT" ? "cert" : ""}`}>{edu.badge}</span>
            <div className="edu-title">{lang === "en" ? edu.titleEn : edu.titlePt}</div>
            <div className="edu-sub">{lang === "en" ? edu.subEn : edu.subPt}</div>
          </div>
        ))}
      </div>
      <div className="sep"></div>
      <a className="cta-btn cta-primary" href="mailto:[email protected]">
        {translations?.cta_reach}
      </a>
    </section>
  )
}
