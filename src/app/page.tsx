"use client";

import { useQuestions } from "@/hooks/useQuestions";
import { useFilters } from "@/hooks/useFilters";
import { filterQuestions } from "@/utils/filterQuestions";
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner";
import { QuestionListTemplate } from "@/components/template/QuestionListTemplate";

export default function HomePage() {
  const { questions, loading } = useQuestions();
  const { filters, setFilters } = useFilters();

  if (loading) return <LoadingSpinner />;

  const filtered = filterQuestions({ questions, filters });

  return (
    <QuestionListTemplate
      filters={filters}
      setFilters={setFilters}
      questions={filtered}
    />
  );
}
