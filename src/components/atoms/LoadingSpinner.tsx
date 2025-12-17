import { CircularProgress, Box } from '@mui/material'

export const LoadingSpinner = () => {
  return (
    <Box textAlign="center" mt={4}>
      <CircularProgress />
    </Box>
  )
}
