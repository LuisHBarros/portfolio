import { useContext } from 'react'
import { LanguageContext } from '@/contexts/LangContext'

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return { lang: 'en', setLang: () => {}, translations: null }
  }
  return context
}
