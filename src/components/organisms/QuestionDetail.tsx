/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Stack } from '@mui/material'
import { QuestionMeta } from '@/components/molecules/QuestionsMeta'

export function QuestionDetail({ q }: any) {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">{q.title}</Typography>
      <QuestionMeta q={q} />
      <Typography>{q.summary}</Typography>
    </Stack>
  )
}
