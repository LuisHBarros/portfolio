'use client'

import { useState, useEffect } from 'react'
import { ContactInfo } from '@/types'

export function useContact() {
  const [data, setData] = useState<ContactInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/contact')
        if (!response.ok) throw new Error('Failed to fetch contact')
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
