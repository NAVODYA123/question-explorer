/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, MenuItem } from '@mui/material'

export function SelectInput({ label, value, onChange, options }: any) {
  return (
    <TextField
      select
      size="small"
      label={label}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {options.map((o: any) => (
        <MenuItem key={o.value} value={o.value}>
          {o.label}
        </MenuItem>
      ))}
    </TextField>
  )
}
