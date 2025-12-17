import { TextField } from '@mui/material'

export const SearchInput = ({ onChange }: { onChange: (v: string) => void }) => {
  return (
    <TextField
      size="small"
      label="Search"
      onChange={e => onChange(e.target.value)}
    />
  )
}
