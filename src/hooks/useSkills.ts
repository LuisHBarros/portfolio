'use client'

import { useState, useEffect } from 'react'
import { SkillCategory } from '@/types'

export function useSkills() {
  const [data, setData] = useState<SkillCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/skills')
        if (!response.ok) throw new Error('Failed to fetch skills')
        const json = await response.json()
        setData(json)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, isLoading, error }
}
