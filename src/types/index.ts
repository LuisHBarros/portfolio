export type Theme = 'dark' | 'light'
export type Language = 'en' | 'pt'
export type Section = 'home' | 'experience' | 'skills' | 'projects' | 'contact' | 'posts'

export interface Experience {
  id: number
  order: number
  titleEn: string
  titlePt: string
  dateEn: string
  datePt: string
  company: string
  location: string
  bullets: ExperienceBullet[]
  createdAt: Date
}

export interface ExperienceBullet {
  id: number
  order: number
  textEn: string
  textPt: string
  experienceId: number
}

export interface Project {
  id: number
  order: number
  titleEn: string
  titlePt: string
  subEn: string
  subPt: string
  githubUrl: string | null
  bullets: ProjectBullet[]
  tags: ProjectTag[]
}

export interface ProjectBullet {
  id: number
  order: number
  textEn: string
  textPt: string
  projectId: number
}

export interface ProjectTag {
  id: number
  label: string
  projectId: number
}

export interface SkillCategory {
  id: number
  order: number
  keyEn: string
  keyPt: string
  skills: Skill[]
}

export interface Skill {
  id: number
  label: string
  isPrimary: boolean
  categoryId: number
}

export interface Post {
  id: number
  order: number
  titleEn: string
  titlePt: string
  excerptEn: string
  excerptPt: string
  bodyEn: string
  bodyPt: string
  tags: string
  date: string
  readTimeEn: string
  readTimePt: string
  postTags: PostTag[]
}

export interface PostTag {
  id: number
  label: string
  postId: number
}

export interface ContactInfo {
  id: number
  key: string
  labelEn: string
  labelPt: string
  value: string
  href: string | null
  order: number
}

export interface Education {
  id: number
  order: number
  badge: string
  titleEn: string
  titlePt: string
  subEn: string
  subPt: string
}

export interface PortfolioData {
  experiences: Experience[]
  projects: Project[]
  skills: SkillCategory[]
  posts: Post[]
  contact: ContactInfo[]
  education: Education[]
}

export interface Translations {
  role: string
  nav_home: string
  nav_exp: string
  nav_skills: string
  nav_projects: string
  nav_contact: string
  nav_posts: string
  bio_role: string
  bio_desc: string
  meta_loc: string
  meta_exp: string
  meta_exp_val: string
  meta_company: string
  cta_contact: string
  j1_title: string
  j1_date: string
  j1_b1: string
  j1_b2: string
  j1_b3: string
  j1_b4: string
  j2_title: string
  j2_date: string
  j2_b1: string
  j2_b2: string
  j2_b3: string
  j2_b4: string
  j3_title: string
  j3_date: string
  j3_b1: string
  j3_b2: string
  j3_b3: string
  sk_lang: string
  sk_arch: string
  sk_msg: string
  sk_db: string
  sk_sec: string
  sk_obs: string
  sk_infra: string
  sk_int: string
  p1_title: string
  p1_sub: string
  p1_b1: string
  p1_b2: string
  p1_b3: string
  p1_b4: string
  p2_title: string
  p2_sub: string
  p2_b1: string
  p2_b2: string
  p2_b3: string
  p2_b4: string
  c_phone: string
  c_loc_label: string
  c_loc_val: string
  edu1_title: string
  cert1_sub: string
  cert2_title: string
  cert2_sub: string
  lang_title: string
  lang_sub: string
  cta_reach: string
  pf_all: string
  pf_arch: string
  pf_career: string
  read_4: string
  read_5: string
  read_6: string
  read_7: string
  read_8: string
  post1_title: string
  post1_excerpt: string
  post1_p1: string
  post1_p2: string
  post1_h2: string
  post1_li1: string
  post1_li2: string
  post1_li3: string
  post1_li4: string
  post1_callout: string
  post2_title: string
  post2_excerpt: string
  post2_p1: string
  post2_h1: string
  post2_h2: string
  post2_p2: string
  post2_callout: string
  post3_title: string
  post3_excerpt: string
  post3_p1: string
  post3_p2: string
  post3_h2: string
  post3_p3: string
  post3_callout: string
  post4_title: string
  post4_excerpt: string
  post4_p1: string
  post4_h1: string
  post4_p2: string
  post4_h2: string
  post4_p3: string
  post4_h3: string
  post4_p4: string
  post4_callout: string
  post5_title: string
  post5_excerpt: string
  post5_h1: string
  post5_li1: string
  post5_li2: string
  post5_li3: string
  post5_p1: string
  post5_callout: string
  post6_title: string
  post6_excerpt: string
  post6_p1: string
  post6_h1: string
  post6_callout: string
}
