'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Language, Translations } from '@/types'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  translations: Translations | null
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')
  const [translations, setTranslations] = useState<Translations | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = (typeof localStorage !== 'undefined' ? (localStorage.getItem('pf_lang') as Language) : 'en') || 'en'
    setLangState(savedLang)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = savedLang
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const fetchTranslations = async () => {
      try {
        const response = await fetch(`/api/translations?lang=${lang}`)
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error('Failed to fetch translations:', error)
      }
    }

    fetchTranslations()
  }, [lang])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('pf_lang', newLang)
    }
  }

  if (!mounted) {
    return <>{children}</>
  }

  return <LanguageContext.Provider value={{ lang, setLang, translations }}>{children}</LanguageContext.Provider>
}

export { LanguageContext }

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return { lang: 'en', setLang: () => {}, translations: null }
  }
  return context
}
