'use client'

import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import { Question } from '@/app/types/question'

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/questions.csv')
      .then(res => res.text())
      .then(text => {
        const parsed = Papa.parse<Question>(text, {
          header: true,
          skipEmptyLines: true,
        })
        setQuestions(parsed.data)
        setLoading(false)
      })
  }, [])

  return { questions, loading }
}
