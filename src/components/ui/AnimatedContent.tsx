"use client"

import { ReactNode, useEffect, useRef } from "react"

interface AnimatedContentProps {
  animateKey: number
  className?: string
  children: ReactNode
}

export function AnimatedContent({ animateKey, className = "", children }: AnimatedContentProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current) return

    const lines = rootRef.current.querySelectorAll<HTMLElement>(".anim-line")
    lines.forEach((line, index) => {
      line.style.setProperty("--line-order", `${Math.min(index, 12)}`)
    })
  }, [animateKey])

  return (
    <div key={animateKey} ref={rootRef} className={`content-anim-root ${className}`.trim()}>
      {children}
    </div>
  )
}
