/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Stack, TextField } from "@mui/material";
import { SearchInput } from "../atoms/SearchInput";
import { SelectInput } from "../atoms/SelectInput";
import { useQuestions } from "@/app/hooks/useQuestions";

export const FilterBar = ({ filters, setFilters }: any) => {
  const { companies } = useQuestions();
  return (
    <Stack direction="row" spacing={2} mb={3}>
      <SearchInput
        onChange={(v) => setFilters((f: any) => ({ ...f, search: v }))}
      />

      <SelectInput
        sx={{ width: 120 }}
        label="Difficulty"
        value={filters.difficulty}
        onChange={(v: string) =>
          setFilters((f: any) => ({ ...f, difficulty: v }))
        }
        options={[
          { label: "All", value: "" },
          { label: "Easy", value: "1" },
          { label: "Medium", value: "2" },
          { label: "Hard", value: "3" },
        ]}
      />
      <Autocomplete
        disablePortal
        options={companies}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Company" />}
        onChange={(_, value) =>
          setFilters((f: any) => ({ ...f, company: value || "" }))
        }
      />
    </Stack>
  );
};
