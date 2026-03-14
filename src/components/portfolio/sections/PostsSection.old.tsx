"use client"
import { useState } from "react"
import { useLanguage } from "@/hooks/index"
import { Command } from "@/components/ui/Command"
import { usePosts } from "@/hooks/index"
import { Post } from "@/types"

interface PostsSectionProps {
  activeSection: string // 👈 tipo correto
}

export function PostsSection({ activeSection }: PostsSectionProps) {
  const { lang, translations } = useLanguage()
  const { data: posts, isLoading } = usePosts()
  const [filter, setFilter] = useState("all")
  const [openPostId, setOpenPostId] = useState<number | null>(null)

  const filters = [
    { key: "all", label: translations?.pf_all || "all" },
    { key: "java", label: "Java" },
    { key: "sql", label: "SQL" },
    { key: "arch", label: translations?.pf_arch || "Architecture" },
    { key: "career", label: translations?.pf_career || "Career" },
  ]

  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.tags.includes(filter))

  const togglePost = (postId: number) => {
    setOpenPostId(openPostId === postId ? null : postId)
  }

  const getReadTime = (post: Post): string => {
    if (post.readTimeEn.startsWith("4")) return translations?.read_4 || post.readTimeEn
    if (post.readTimeEn.startsWith("5")) return translations?.read_5 || post.readTimeEn
    if (post.readTimeEn.startsWith("6")) return translations?.read_6 || post.readTimeEn
    if (post.readTimeEn.startsWith("7")) return translations?.read_7 || post.readTimeEn
    if (post.readTimeEn.startsWith("8")) return translations?.read_8 || post.readTimeEn
    return lang === "en" ? post.readTimeEn : post.readTimePt
  }

  if (isLoading) {
    return (
      <section className="section" id="posts">
        <Command command="ls -lt posts/ | grep .md" />
        <div style={{ color: "var(--accent-dim)" }}>Loading posts...</div>
      </section>
    )
  }

  return (
    <section id="posts" className={activeSection === "posts" ? "section active" : "section"}>
      <Command command="ls <span class='flag'>-lt</span> posts/ <span class='flag'>| grep</span> .md" />

      <div className="posts-filters">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${filter === f.key ? "active" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="posts-grid">
        {filteredPosts.map((post) => {
          const isOpen = openPostId === post.id
          const bodyHtml = lang === "en" ? post.bodyEn : post.bodyPt

          return (
            <article // 👈 key vai aqui, não dentro
              key={post.id}
              className="post-card"
              data-tags={post.tags}
              data-open={isOpen.toString()}
              onClick={() => togglePost(post.id)}
            >
              <div className="post-card-header">
                <div className="post-card-left">
                  <div className="post-title">{lang === "en" ? post.titleEn : post.titlePt}</div>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    {post.postTags.map((tag) => (
                      <span key={tag.id} className="post-tag">
                        {tag.label}
                      </span>
                    ))}
                    <span className="post-read">{getReadTime(post)}</span>
                  </div>
                </div>
                <span className="post-toggle">▶</span>
              </div>

              <div className="post-excerpt">{lang === "en" ? post.excerptEn : post.excerptPt}</div>

              <div // 👈 post-body dentro do article
                className="post-body"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            </article>
          )
        })}
      </div>
    </section>
  )
}
