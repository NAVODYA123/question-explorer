import { Question } from "@/types/question";
import { filters } from "../types/filters";

type FiterQuestionProps = {
  questions: Question[];
  filters: filters;
};

export const filterQuestions = ({
  questions,
  filters,
}: FiterQuestionProps): Question[] => {
  const result = questions.filter((q) => {
    if (
      filters.search &&
      !q.title.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;

    if (filters.difficulty && q.difficulty !== filters.difficulty) return false;

    if (filters.company && q.company !== filters.company) return false;

    if (filters.type && q.type !== filters.type) return false;

    return true;
  });

  if (filters.sort === "votes") {
    result.sort((a, b) => Number(b.votes) - Number(a.votes));
  }

  if (filters.sort === "difficulty") {
    result.sort((a, b) => Number(a.difficulty) - Number(b.difficulty));
  }

  return result;
};
