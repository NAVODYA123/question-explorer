/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Stack } from "@mui/material";
import { QuestionMeta } from "@/components/molecules/QuestionsMeta";
import { Question } from "@/app/types/question";

export const QuestionDetail = ({
  title,
  company,
  type,
  votes,
  summary,
}: Question) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">{title}</Typography>
      <QuestionMeta
        questionMetaData={{
          type: type,
          company: company,
          votes: votes,
        }}
      />
      <Typography>{summary}</Typography>
    </Stack>
  );
};
