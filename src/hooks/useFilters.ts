import { useState } from "react";

export function useFilters() {
  const [filters, setFilters] = useState({
    search: "",
    difficulty: "",
    sort: "votes",
    type: "",
    company: "",
  });

  return { filters, setFilters };
}
