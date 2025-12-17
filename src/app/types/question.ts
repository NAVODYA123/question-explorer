export type Difficulty = '1' | '2' | '3'

export interface Question {
  id: string
  title: string
  difficulty: Difficulty
  type: string
  company: string
  votes: string
  summary: string
}

export type CsvQuestion = {
  qid: string
  title: string
  difficulty: string
  type: string
  company_asked: string
  'sum(cu.vote)': string
  question_summary: string
}
