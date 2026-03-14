"use client"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

interface PostDialogProps {
  open: boolean
  onClose: () => void
  title: string
  meta: React.ReactNode
  bodyHtml: string
}

export function PostDialog({ open, onClose, title, meta, bodyHtml }: PostDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="dialog-overlay" onClick={onClose}>
      <div
        className="dialog"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dialog-titlebar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="dialog-title">{title}</span>
          <button className="dialog-close" onClick={onClose}>✕</button>
        </div>

        <div className="dialog-meta">{meta}</div>

        <div
          className="dialog-body"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </div>
    </div>,
    document.body
  )
}
