'use client'

import { useQuestions } from '@/app/hooks/useQuestions'
import { useFilters } from '@/app/hooks/useFilters'
import { filterQuestions } from '@/app/utils/filterQuestions'
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner'
import { QuestionListTemplate } from '@/components/template/QuestionListTemplate'

export default function HomePage() {
  const { questions, loading } = useQuestions()
  const { filters, setFilters } = useFilters()

  if (loading) return <LoadingSpinner />

  const filtered = filterQuestions(questions, filters)

  return (
    <QuestionListTemplate
      filters={filters}
      setFilters={setFilters}
      questions={filtered}
    />
  )
}
