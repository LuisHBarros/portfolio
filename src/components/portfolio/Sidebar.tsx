'use client'

import { useLanguage } from '@/hooks/index'
import { Section } from '@/types'

interface SidebarProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { lang, translations } = useLanguage()

  const navItems: Array<{ key: Section; en: string; pt: string }> = [
    { key: 'home', en: 'home', pt: 'home' },
    { key: 'experience', en: 'experience', pt: 'experiência' },
    { key: 'skills', en: 'skills', pt: 'habilidades' },
    { key: 'projects', en: 'projects', pt: 'projetos' },
    { key: 'contact', en: 'contact', pt: 'contato' },
    { key: 'posts', en: 'posts', pt: 'posts' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-prompt">
        <div>
          <span className="host">luis</span>
          <span style={{ color: 'var(--accent-dim)' }}>@</span>
          <span style={{ color: 'var(--cyan)' }}>portfolio</span>
        </div>
        <div style={{ color: 'var(--text-dim)', fontSize: '10px' }}>
          {translations?.role}
        </div>
      </div>
      <nav>
        {navItems.map(item => (
          <a
            key={item.key}
            className={`nav-item ${activeSection === item.key ? 'active' : ''}`}
            onClick={() => onSectionChange(item.key)}
            href="#"
          >
            {lang === 'en' ? item.en : item.pt}
          </a>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="mode">NORMAL</div>
        <div>Java · Spring Boot</div>
        <div>DDD · Hexagonal Arch</div>
        <div>Kafka · RabbitMQ</div>
      </div>
    </aside>
  )
}
