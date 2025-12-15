/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Typography } from '@mui/material'
import { DifficultyBadge } from '../atoms/DifficultyBadge'

export function QuestionHeader({ title, difficulty }: any) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h6">{title}</Typography>
      <DifficultyBadge level={difficulty} />
    </Stack>
  )
}
