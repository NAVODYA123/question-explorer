import { Box, Chip, Stack, Typography } from "@mui/material";
import { VoteCount } from "../atoms/VoteCount";

type QuestionMetaProps = {
  questionMetaData: { type: string; company: string; votes: string };
};

export const QuestionMeta = ({ questionMetaData }: QuestionMetaProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Chip label={questionMetaData.type} />
          <Typography>{questionMetaData.company}</Typography>
        </Box>
        <Box>
          <VoteCount votes={questionMetaData.votes} />
        </Box>
      </Box>
    </Stack>
  );
};
