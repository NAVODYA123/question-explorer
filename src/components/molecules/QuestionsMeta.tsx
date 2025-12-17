import { Stack, Typography } from "@mui/material";
import { VoteCount } from "../atoms/VoteCount";

type QuestionMetaProps = {
  questionMetaData: { type: string; company: string; votes: string };
};

export const QuestionMeta = ({ questionMetaData }: QuestionMetaProps) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography>{questionMetaData.type}</Typography>
      <Typography>{questionMetaData.company}</Typography>
      <VoteCount votes={questionMetaData.votes} />
    </Stack>
  );
};
