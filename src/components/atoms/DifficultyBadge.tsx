import { DifficultyLevel } from "@/constatnts/DifficultyLevel";
import { Chip } from "@mui/material";

type DifficultyConfig = {
  label: string;
  color: string;
  textColor?: string;
};

export const DifficultyBadge = ({ level }: { level: DifficultyLevel }) => {
  const map: Record<DifficultyLevel, DifficultyConfig> = {
    [DifficultyLevel.EASY]: {
      label: "Easy",
      color: "success.light",
      textColor: "#003300",
    },
    [DifficultyLevel.MEDIUM]: {
      label: "Medium",
      color: "warning.light",
      textColor: "#663300",
    },
    [DifficultyLevel.HARD]: {
      label: "Hard",
      color: "error.light",
      textColor: "#660000",
    },
  };

  return (
    <Chip
      size="medium"
      label={map[level].label}
      // color={map[level].color}
      sx={{
        width: 80,
        backgroundColor: map[level].color,
        color: map[level].textColor,
        "& .MuiChip-label": {
          fontSize: "14px",
          fontWeight: 700,
        },
      }}
    />
  );
};
