import { Stack, Typography } from "@mui/material";

type QuestionBodyProps = {
  question: string;
};

export const QuestionBody = ({ question }: QuestionBodyProps) => {
  return (
    <Stack spacing={2}>
      <Typography>{question}</Typography>
    </Stack>
  );
};
