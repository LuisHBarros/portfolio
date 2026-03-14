"use client"
import { useEffect, useRef } from "react"

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  date?: string
  children: React.ReactNode
}

export function Dialog({ isOpen, onClose, title, date, children }: DialogProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="dialog-overlay"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div className="dialog" role="dialog" aria-modal="true">
        <div className="dialog-titlebar">
          <div className="dialog-dots">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
          </div>
          <div className="dialog-title">
            <span style={{ color: "var(--accent-dim)" }}>~/posts/</span>
            <span style={{ color: "var(--accent)" }}>{title}</span>
          </div>
          <button className="dialog-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="dialog-meta">
          <span className="cmd-prompt" style={{ fontSize: "11px" }}>
            <span className="user">luis</span>
            <span className="at">@</span>
            <span className="host">portfolio</span>
            <span className="path">:~/posts</span>
            <span className="sym">&nbsp;</span>
          </span>
          <span style={{ color: "var(--text)", fontSize: "11px" }}>
            cat <span style={{ color: "var(--amber)" }}>{date}</span>.md
          </span>
        </div>

        <div className="dialog-body">{children}</div>
      </div>
    </div>
  )
}
