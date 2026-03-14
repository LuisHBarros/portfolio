'use client'

import { useState, useEffect } from 'react'
import { Education } from '@/types'

export function useEducation() {
  const [data, setData] = useState<Education[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/education')
        if (!response.ok) throw new Error('Failed to fetch education')
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
