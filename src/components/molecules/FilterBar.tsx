/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from '@mui/material'
import { SearchInput } from '../atoms/SearchInput'
import { SelectInput } from '../atoms/SelectInput'

export function FilterBar({ filters, setFilters }: any) {
  return (
    <Stack direction="row" spacing={2} mb={3}>
      <SearchInput onChange={v => setFilters((f: any) => ({ ...f, search: v }))} />

      <SelectInput
        label="Difficulty"
        value={filters.difficulty}
        onChange={(v: string) =>
          setFilters((f: any) => ({ ...f, difficulty: v }))
        }
        options={[
          { label: 'All', value: '' },
          { label: 'Easy', value: '1' },
          { label: 'Medium', value: '2' },
          { label: 'Hard', value: '3' },
        ]}
      />
    </Stack>
  )
}
