/* eslint-disable @typescript-eslint/no-explicit-any */
import { QuestionCard } from './QuestionCard'
import { EmptyState } from '@/components/atoms/EmptyState'

export function QuestionList({ questions }: any) {
  if (!questions.length) return <EmptyState />

  return questions.map((q: any) => <QuestionCard key={q.id} q={q} />)
}
