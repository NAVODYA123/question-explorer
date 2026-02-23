import { Box, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export const VoteCount = ({ votes }: { votes: string }) => {
  const voteNumber = Number(votes);
  const displayCount = Math.abs(voteNumber);

  // determine color based on positive or negative
  const color =
    voteNumber > 0
      ? "primary.dark"
      : voteNumber < 0
        ? "error.dark"
        : "text.primary";
  const sign = voteNumber > 0 ? "+" : "-";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      {voteNumber !== 0 &&
        (voteNumber > 0 ? (
          <ThumbUpIcon sx={{ color }} />
        ) : (
          <ThumbDownIcon sx={{ color }} />
        ))}
      <Typography sx={{ color, fontWeight: 600 }}>
        {voteNumber !== 0 ? `${sign}${displayCount}` : "0"}
      </Typography>
    </Box>
  );
};
