/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Container } from "@mui/material";
import { PageHeader } from "../organisms/PageHeader";
import { FilterBar } from "../molecules/FilterBar";
import { QuestionList } from "../organisms/QuestionList";
import { Question } from "@/types/question";
import { QuestionTable } from "../organisms/QuestionTable";

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
      <Card variant="outlined" sx={{ p: 2, mb: 4, backgroundColor: "#FFFFFF" }}>
        <FilterBar filters={filters} setFilters={setFilters} />
      </Card>
      {/* <QuestionList questions={questions} /> */}
      <QuestionTable questions={questions} />
    </Container>
  );
}
