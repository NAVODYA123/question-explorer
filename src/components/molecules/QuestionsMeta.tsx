import { Chip, Stack, Typography } from "@mui/material";
import { VoteCount } from "../atoms/VoteCount";

type QuestionMetaProps = {
  questionMetaData: { type: string; company: string; votes: string };
};

export const QuestionMeta = ({ questionMetaData }: QuestionMetaProps) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Chip label={questionMetaData.type} />
      <Typography>{questionMetaData.company}</Typography>
      <VoteCount votes={questionMetaData.votes} />
    </Stack>
  );
};
