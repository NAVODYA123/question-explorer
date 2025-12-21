/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectInput } from "../atoms/SelectInput";

export function SortBar({ sort, setSort }: any) {
  return (
    <SelectInput
      label="Sort By"
      value={sort}
      onChange={setSort}
      options={[
        { label: "Votes", value: "votes" },
        { label: "Difficulty", value: "difficulty" },
      ]}
    />
  );
}
