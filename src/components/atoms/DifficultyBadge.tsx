import { DifficultyLevel } from '@/app/constatnts/DifficultyLevel'
import { Chip } from '@mui/material'

type DifficultyConfig = {
  label: string
  color: 'success' | 'warning' | 'error'
}

export const DifficultyBadge =({ level }: { level: DifficultyLevel }) => {
 const map: Record<DifficultyLevel, DifficultyConfig> = {
    [DifficultyLevel.EASY]: {
      label: 'Easy',
      color: 'success',
    },
    [DifficultyLevel.MEDIUM]: {
      label: 'Medium',
      color: 'warning',
    },
    [DifficultyLevel.HARD]: {
      label: 'Hard',
      color: 'error',
    },
  }

    return <Chip size="small" label={map[level].label} color={map[level].color} />
}
