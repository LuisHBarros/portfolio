import { useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    return { theme: 'dark', toggleTheme: () => {}, setTheme: () => {} }
  }
  return context
}
