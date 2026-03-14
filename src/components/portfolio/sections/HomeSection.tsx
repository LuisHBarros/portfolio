"use client"

import { useLanguage } from "@/hooks/index"
import { Command } from "@/components/ui/Command"

export function HomeSection({ activeSection }: { activeSection: string }) {
  const { lang, translations } = useLanguage()

  return (
    <section className={activeSection === "home" ? "section active" : "section"} id="home">
      <Command command="cat about.md" />
      <div style={{ marginBottom: "26px" }}>
        <pre
          style={{
            color: "var(--accent-dim)",
            fontSize: "10px",
            lineHeight: "1.25",
            marginBottom: "14px",
            overflow: "hidden",
            fontFamily: '"Courier New", Courier, monospace', // 👈 volta ao fallback original
          }}
        >
          {" ██╗     ██╗   ██╗██╗███████╗\n" +
            " ██║     ██║   ██║██║██╔════╝\n" +
            " ██║     ██║   ██║██║███████╗\n" +
            " ██║     ██║   ██║██║╚════██║\n" +
            " ███████╗╚██████╔╝██║███████║\n" +
            " ╚══════╝ ╚═════╝ ╚═╝╚══════╝"}
        </pre>
        <div className="bio-title">Luis Henrique de Barros</div>
        <div className="bio-role">{translations?.bio_role}</div>
        <div className="bio-desc">{translations?.bio_desc}</div>
      </div>
      <div className="metadata">
        <div className="meta-row">
          <span className="meta-key">{translations?.meta_loc}</span>
          <span className="meta-val">Sertãozinho, SP, Brasil</span>
        </div>
        <div className="meta-row">
          <span className="meta-key">{translations?.meta_exp}</span>
          <span className="meta-val">{translations?.meta_exp_val}</span>
        </div>
        <div className="meta-row">
          <span className="meta-key">{translations?.meta_company}</span>
          <span className="meta-val">Nova Smar S/A</span>
        </div>
        <div className="meta-row">
          <span className="meta-key">stack</span>
          <span className="meta-val">Java 21 · Spring Boot 3 · Kafka · PostgreSQL</span>
        </div>
        <div className="meta-row">
          <span className="meta-key">focus</span>
          <span className="meta-val">DDD · Hexagonal Architecture · E2EE</span>
        </div>
        <div className="meta-row">
          <span className="meta-key">github</span>
          <span className="meta-val">
            <a href="https://github.com/LuisHBarros" target="_blank" rel="noopener noreferrer">
              github.com/LuisHBarros
            </a>
          </span>
        </div>
        <div className="meta-row">
          <span className="meta-key">linkedin</span>
          <span className="meta-val">
            <a
              href="https://linkedin.com/in/luis-henriquede-barros-207929226"
              target="_blank"
              rel="noopener noreferrer"
            >
              luis-henriquede-barros
            </a>
          </span>
        </div>
        <div className="meta-row">
          <span className="meta-key">website</span>
          <span className="meta-val">
            <a href="https://luisbarros.dev" target="_blank" rel="noopener noreferrer">
              luisbarros.dev
            </a>
          </span>
        </div>
      </div>
      <div className="cta-row">
        <a className="cta-btn cta-primary" href="mailto:[email protected]">
          {translations?.cta_contact}
        </a>
        <a
          className="cta-btn cta-ghost"
          href="https://github.com/LuisHBarros"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇗ github
        </a>
        <a
          className="cta-btn cta-ghost"
          href="https://linkedin.com/in/luis-henriquede-barros-207929226"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇗ linkedin
        </a>
      </div>
      <div className="sep"></div>
      <span style={{ color: "var(--text-dim)", fontSize: "11px" }}>
        <span style={{ color: "var(--accent-dim)" }}>$</span> _<span className="cursor"></span>
      </span>
    </section>
  )
}
