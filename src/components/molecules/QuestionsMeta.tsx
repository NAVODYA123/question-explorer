/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Typography } from '@mui/material'
import { DifficultyBadge } from '../atoms/DifficultyBadge'
import { VoteCount } from '../atoms/VoteCount'

export function QuestionMeta({ q }: any) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <DifficultyBadge level={q.difficulty} />
      <Typography>{q.type}</Typography>
      <Typography>{q.company}</Typography>
      <VoteCount votes={q.votes} />
    </Stack>
  )
}
