import { DifficultyLevel } from "@/constatnts/DifficultyLevel";
import { Chip } from "@mui/material";

type DifficultyConfig = {
  label: string;
  color: string;
};

export const DifficultyBadge = ({ level }: { level: DifficultyLevel }) => {
  const map: Record<DifficultyLevel, DifficultyConfig> = {
    [DifficultyLevel.EASY]: {
      label: "Easy",
      color: "success.light",
    },
    [DifficultyLevel.MEDIUM]: {
      label: "Medium",
      color: "warning.light",
    },
    [DifficultyLevel.HARD]: {
      label: "Hard",
      color: "error.light",
    },
  };

  return (
    <Chip
      size="medium"
      label={map[level].label}
      // color={map[level].color}
      sx={{ width: 80, backgroundColor: map[level].color, color: "white" }}
    />
  );
};
