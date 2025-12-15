import { Typography } from '@mui/material'

export function EmptyState() {
  return (
    <Typography color="text.secondary" mt={4}>
      No questions match your filters.
    </Typography>
  )
}
