'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Theme } from '@/types'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = (typeof localStorage !== 'undefined' ? (localStorage.getItem('pf_theme') as Theme) : 'dark') || 'dark'
    setThemeState(savedTheme)
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = savedTheme
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = newTheme
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('pf_theme', newTheme)
    }
  }

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext }

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    return { theme: 'dark', toggleTheme: () => {}, setTheme: () => {} }
  }
  return context
}
