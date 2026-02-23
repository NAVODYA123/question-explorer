import { QuestionCard } from "./QuestionCard";
import { EmptyState } from "@/components/atoms/EmptyState";
import { Question } from "@/types/question";
import { Box } from "@mui/material";

type QuestionListProps = {
  questions: Question[];
};

export const QuestionList = ({ questions }: QuestionListProps) => {
  if (!questions.length) return <EmptyState />;

  return (
    <Box sx={{ mt: 4 }}>
      {questions.map((q: Question) => (
        <QuestionCard key={q.id} q={q} />
      ))}
    </Box>
  );
};
