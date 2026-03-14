'use client'

import { useState, useEffect } from 'react'
import { Post } from '@/types'

export function usePosts(filter?: string) {
  const [data, setData] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = filter ? `/api/posts?filter=${filter}` : '/api/posts'
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch posts')
        const json = await response.json()
        setData(json)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [filter])

  return { data, isLoading, error }
}
