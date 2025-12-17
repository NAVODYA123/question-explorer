import { Box, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export const VoteCount = ({ votes }: { votes: string }) => {
  const voteNumber = Number(votes);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      {voteNumber >= 0 ? (
        <ThumbUpIcon sx={{ color: "blue" }} />
      ) : (
        <ThumbDownIcon sx={{ color: "red" }} />
      )}
      <Typography> {votes} </Typography>
    </Box>
  );
};
