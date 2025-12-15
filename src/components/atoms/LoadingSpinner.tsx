import { CircularProgress, Box } from '@mui/material'

export function LoadingSpinner() {
  return (
    <Box textAlign="center" mt={4}>
      <CircularProgress />
    </Box>
  )
}
