import { Chip } from '@mui/material'

export function DifficultyBadge({ level }: { level: '1' | '2' | '3' }) {
  const map = {
    '1': { label: 'Easy', color: 'success' },
    '2': { label: 'Medium', color: 'warning' },
    '3': { label: 'Hard', color: 'error' },
  } as const

  return <Chip size="small" {...map[level]} />
}
