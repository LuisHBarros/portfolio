'use client'

import { useEffect, useState } from 'react'
import { PortfolioData } from '@/types'

const EMPTY_PORTFOLIO_DATA: PortfolioData = {
  experiences: [],
  projects: [],
  skills: [],
  posts: [],
  contact: [],
  education: [],
}

let portfolioCache: PortfolioData | null = null
let inFlightRequest: Promise<PortfolioData> | null = null

async function fetchPortfolioData(): Promise<PortfolioData> {
  if (portfolioCache) {
    return portfolioCache
  }

  if (inFlightRequest) {
    return inFlightRequest
  }

  inFlightRequest = fetch('/api/portfolio')
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio data')
      }
      return response.json() as Promise<PortfolioData>
    })
    .then((data) => {
      portfolioCache = data
      return data
    })
    .finally(() => {
      inFlightRequest = null
    })

  return inFlightRequest
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(portfolioCache ?? EMPTY_PORTFOLIO_DATA)
  const [isLoading, setIsLoading] = useState(!portfolioCache)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    if (portfolioCache) {
      setData(portfolioCache)
      setIsLoading(false)
      return () => {
        isMounted = false
      }
    }

    fetchPortfolioData()
      .then((result) => {
        if (!isMounted) return
        setData(result)
      })
      .catch((err) => {
        if (!isMounted) return
        setError(err instanceof Error ? err.message : 'An error occurred')
      })
      .finally(() => {
        if (!isMounted) return
        setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return {
    experiences: data.experiences,
    projects: data.projects,
    skills: data.skills,
    posts: data.posts,
    contact: data.contact,
    education: data.education,
    isLoading,
    error,
  }
}
