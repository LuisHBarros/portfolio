'use client'

import { useLanguage } from '@/hooks/index'
import { Section } from '@/types'

interface StatusbarProps {
  activeSection: Section
}

export function Statusbar({ activeSection }: StatusbarProps) {
  const { lang, translations } = useLanguage()

  const getSectionName = (section: Section): string => {
    const names: Record<Section, { en: string; pt: string }> = {
      home: { en: 'home', pt: 'home' },
      experience: { en: 'experience', pt: 'experiência' },
      skills: { en: 'skills', pt: 'habilidades' },
      projects: { en: 'projects', pt: 'projetos' },
      contact: { en: 'contact', pt: 'contato' },
      posts: { en: 'posts', pt: 'posts' },
    }
    return lang === 'en' ? names[section].en : names[section].pt
  }

  return (
    <div className="statusbar">
      <span className="sb-mode">NORMAL</span>
      <span>{getSectionName(activeSection)}</span>
      <span>·</span>
      <span>Java · Spring Boot · DDD · Kafka</span>
      <span className="sb-right">luisbarros.dev</span>
    </div>
  )
}
