'use client'

import { useExperiences, useProjects, useSkills, usePosts, useContact, useEducation } from '@/hooks'
import { Experience, Project, SkillCategory, Post, ContactInfo, Education } from '@/types'

export function usePortfolioData() {
  const { data: experiences, isLoading: expLoading } = useExperiences()
  const { data: projects, isLoading: projLoading } = useProjects()
  const { data: skills, isLoading: skillsLoading } = useSkills()
  const { data: posts, isLoading: postsLoading } = usePosts()
  const { data: contact, isLoading: contactLoading } = useContact()
  const { data: education, isLoading: eduLoading } = useEducation()

  const isLoading =
    expLoading || projLoading || skillsLoading || postsLoading || contactLoading || eduLoading

  return {
    experiences: experiences as Experience[],
    projects: projects as Project[],
    skills: skills as SkillCategory[],
    posts: posts as Post[],
    contact: contact as ContactInfo[],
    education: education as Education[],
    isLoading,
  }
}
