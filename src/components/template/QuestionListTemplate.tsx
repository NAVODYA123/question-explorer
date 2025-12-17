/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@mui/material";
import { PageHeader } from "../organisms/PageHeader";
import { FilterBar } from "../molecules/FilterBar";
import { QuestionList } from "../organisms/QuestionList";

export function QuestionListTemplate({ filters, setFilters, questions }: any) {
  console.log("filters", filters);
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <PageHeader />
      <FilterBar filters={filters} setFilters={setFilters} />
      <QuestionList questions={questions} />
    </Container>
  );
}
