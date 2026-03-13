'use client'
import { useEffect } from 'react'
import posthog from 'posthog-js'

export function CaseStudyTracker({ projectName }: { projectName: string }) {
  useEffect(() => {
    posthog.capture('case_study_opened', { project_name: projectName })
  }, [projectName])
  return null
}
