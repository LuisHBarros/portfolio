"use client"

import { useTheme, useLanguage } from "@/hooks/index"

export function Titlebar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang } = useLanguage()

  return (
    <div className="titlebar">
      <span className="dot dot-r"></span>
      <span className="dot dot-y"></span>
      <span className="dot dot-g"></span>
      <span className="titlebar-label">
        <span>luis</span>@portfolio:~$ — zsh — 120×38
      </span>
      <div className="titlebar-controls">
        <button className={`ctrl-btn ${lang === "en" ? "on" : ""}`} onClick={() => setLang("en")}>
          EN
        </button>
        <button className={`ctrl-btn ${lang === "pt" ? "on" : ""}`} onClick={() => setLang("pt")}>
          PT
        </button>
        <button className="ctrl-btn" onClick={toggleTheme}>
          {theme === "dark" ? "◐ THEME" : "◑ THEME"}
        </button>
      </div>
    </div>
  )
}
