import { QuestionCard } from "./QuestionCard";
import { EmptyState } from "@/components/atoms/EmptyState";
import { Question } from "@/types/question";

type QuestionListProps = {
  questions: Question[];
};

export const QuestionList = ({ questions }: QuestionListProps) => {
  if (!questions.length) return <EmptyState />;

  return questions.map((q: Question) => <QuestionCard key={q.id} q={q} />);
};
