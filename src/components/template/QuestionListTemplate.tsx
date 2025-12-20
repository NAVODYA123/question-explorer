/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@mui/material";
import { PageHeader } from "../organisms/PageHeader";
import { FilterBar } from "../molecules/FilterBar";
import { QuestionList } from "../organisms/QuestionList";
import { Question } from "@/types/question";

type QuestionListTemplateProps = {
  filters: any;
  setFilters: any;
  questions: Question[];
};

export function QuestionListTemplate({
  filters,
  setFilters,
  questions,
}: QuestionListTemplateProps) {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <PageHeader />
      <FilterBar filters={filters} setFilters={setFilters} />
      <QuestionList questions={questions} />
    </Container>
  );
}
