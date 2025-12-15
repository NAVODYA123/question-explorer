import { Typography } from '@mui/material'

export function VoteCount({ votes }: { votes: string }) {
  return <Typography>👍 {votes}</Typography>
}
