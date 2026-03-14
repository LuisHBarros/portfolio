"use client"

import { useLanguage } from "@/hooks/index"

interface CommandProps {
  prompt?: string
  command: string
}

export function Command({ prompt = "luis@portfolio:~$", command }: CommandProps) {
  const lang = useLanguage().lang

  const parts = prompt.split(":")
  const user = parts[0].split("@")[0]
  const host = parts[0].split("@")[1] || "portfolio"
  const path = parts[1] || "~"

  return (
    <div className="cmd">
      <span className="cmd-prompt">
        <span className="user">{user}</span>
        <span className="at">@</span>
        <span className="host">{host}</span>:<span className="path">{path}</span>
        <span className="sym">&nbsp;</span>
      </span>
      <span className="cmd-text" dangerouslySetInnerHTML={{ __html: command }} />
    </div>
  )
}
