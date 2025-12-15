/* eslint-disable @typescript-eslint/no-explicit-any */
import { Question } from '@/app/types/question'

export function filterQuestions(
  questions: Question[],
  filters: any
): Question[] {
  const result = questions.filter(q => {
    if (
      filters.search &&
      !q.title.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false

    if (filters.difficulty && q.difficulty !== filters.difficulty)
      return false

    return true
  })

  if (filters.sort === 'votes') {
    result.sort((a, b) => Number(b.votes) - Number(a.votes))
  }

  if (filters.sort === 'difficulty') {
    result.sort((a, b) => Number(a.difficulty) - Number(b.difficulty))
  }

  return result
}
