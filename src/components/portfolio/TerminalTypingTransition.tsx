"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Section } from "@/types"

interface TerminalTypingTransitionProps {
  section: Section
  durationMs?: number
  onComplete: () => void
}

const SECTION_COMMANDS: Record<Section, string> = {
  home: "cat about.md",
  experience: "cat experience.log",
  skills: "ls skills/ --long",
  projects: "ls projects/",
  contact: "cat contact.json",
  posts: "ls posts/ | head",
}

export function TerminalTypingTransition({
  section,
  durationMs = 800,
  onComplete,
}: TerminalTypingTransitionProps) {
  const [typedText, setTypedText] = useState("")
  const doneRef = useRef(false)
  const command = useMemo(() => SECTION_COMMANDS[section], [section])

  useEffect(() => {
    let intervalId: number | undefined
    let timeoutId: number | undefined
    let index = 0

    const finish = () => {
      if (doneRef.current) return
      doneRef.current = true
      onComplete()
    }

    if (!command.length) {
      finish()
      return
    }

    const intervalMs = Math.max(16, Math.floor(durationMs / command.length))

    intervalId = window.setInterval(() => {
      index += 1
      setTypedText(command.slice(0, index))

      if (index >= command.length) {
        if (intervalId !== undefined) {
          window.clearInterval(intervalId)
        }
        timeoutId = window.setTimeout(finish, 90)
      }
    }, intervalMs)

    return () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [command, durationMs, onComplete])

  return (
    <div className="load-typing" role="status" aria-live="polite">
      <div className="cmd load-typing-line">
        <span className="cmd-prompt">
          <span className="user">luis</span>
          <span className="at">@</span>
          <span className="host">portfolio</span>:<span className="path">~</span>
          <span className="sym">&nbsp;</span>
        </span>
        <span className="cmd-text load-typing-text">
          {typedText}
          <span className="cursor load-typing-cursor"></span>
        </span>
      </div>
    </div>
  )
}
