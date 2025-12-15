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
