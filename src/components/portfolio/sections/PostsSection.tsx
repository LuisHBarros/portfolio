"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/index"
import { Command } from "@/components/ui/Command"
import { Post } from "@/types"
import { PostDialog } from "@/components/ui/PostDialog"
import { AnimatedContent } from "@/components/ui/AnimatedContent"

interface PostsSectionProps {
  activeSection: string
  posts: Post[]
  isLoading?: boolean
  contentAnimKey?: number
}

export function PostsSection({
  activeSection,
  posts,
  isLoading = false,
  contentAnimKey = 0,
}: PostsSectionProps) {
  const { lang, translations } = useLanguage()
  const [filter, setFilter] = useState("all")
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const filters = [
    { key: "all", label: translations?.pf_all || "all" },
    { key: "java", label: "Java" },
    { key: "sql", label: "SQL" },
    { key: "arch", label: translations?.pf_arch || "Architecture" },
    { key: "career", label: translations?.pf_career || "Career" },
  ]

  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.tags.includes(filter))

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

      <AnimatedContent animateKey={contentAnimKey}>
        <div className="posts-filters anim-line">
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
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="post-card anim-line"
              data-tags={post.tags}
              onClick={() => setSelectedPost(post)}
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
                <span className="post-toggle">{">"}</span>
              </div>

              <div className="post-excerpt">{lang === "en" ? post.excerptEn : post.excerptPt}</div>
            </article>
          ))}
        </div>
      </AnimatedContent>

      {selectedPost && (
        <PostDialog
          open={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          title={lang === "en" ? selectedPost.titleEn : selectedPost.titlePt}
          meta={
            <>
              <span className="post-date">{selectedPost.date}</span>
              {selectedPost.postTags.map((tag) => (
                <span key={tag.id} className="post-tag" style={{ marginLeft: 10 }}>
                  {tag.label}
                </span>
              ))}
              <span className="post-read" style={{ marginLeft: 10 }}>
                {getReadTime(selectedPost)}
              </span>
            </>
          }
          bodyHtml={lang === "en" ? selectedPost.bodyEn : selectedPost.bodyPt}
        />
      )}
    </section>
  )
}
