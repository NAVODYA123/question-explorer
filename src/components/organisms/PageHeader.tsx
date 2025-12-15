import { Typography, Box } from '@mui/material'

export function PageHeader() {
  return (
    <Box mb={4}>
      <Typography variant="h4">Question Explorer</Typography>
      <Typography color="text.secondary">
        Practice interview-style questions
      </Typography>
    </Box>
  )
}
