import { Card, CardContent } from '@mui/material'
import Link from 'next/link'
import { QuestionHeader } from '@/components/molecules/QuestionsHeader'
import { QuestionMeta } from '@/components/molecules/QuestionsMeta'

export function QuestionCard({ q }: any) {
  return (
    <Link href={`/question/${q.id}`} style={{ textDecoration: 'none' }}>
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <QuestionHeader title={q.title} difficulty={q.difficulty} />
          <QuestionMeta q={q} />
        </CardContent>
      </Card>
    </Link>
  )
}
