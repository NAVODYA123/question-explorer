import { Question } from "@/types/question";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { EmptyState } from "../atoms/EmptyState";
import { DifficultyBadge } from "../atoms/DifficultyBadge";
import { DifficultyLevel } from "@/constatnts/DifficultyLevel";
import { VoteCount } from "../atoms/VoteCount";

type QuestionListProps = {
  questions: Question[];
};

export const QuestionTable = ({ questions }: QuestionListProps) => {
  if (!questions.length) return <EmptyState />;

  return (
    <TableContainer component={Paper} sx={{ p: 2, backgroundColor: "#f0f0f0" }}>
      <Table
        sx={{
          minWidth: 800,
          borderCollapse: "separate",
          borderSpacing: "0 12px", // vertical gaps between rows
        }}
        aria-label="question table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: 600 }}>
              Question
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Difficulty
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Types
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Votes
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 600 }}>
              Company
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((q: Question) => (
            <TableRow
              key={q.id}
              onClick={() => (window.location.href = `/questions/${q.id}`)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell colSpan={5} sx={{ p: 0, borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "table", // keeps cells aligned
                    width: "100%",
                    tableLayout: "fixed",
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                    transition: "0.3s all",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box sx={{ display: "table-row" }}>
                    <Box sx={{ display: "table-cell", padding: 2 }}>
                      {q.title}
                    </Box>
                    <Box
                      sx={{
                        display: "table-cell",
                        padding: 2,
                        textAlign: "center",
                      }}
                    >
                      <DifficultyBadge
                        level={q.difficulty as DifficultyLevel}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "table-cell",
                        padding: 2,
                        textAlign: "center",
                      }}
                    >
                      {q.type}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        padding: 2,
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <VoteCount votes={q.votes} />
                    </Box>
                    <Box
                      sx={{
                        display: "table-cell",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      {q.company}
                    </Box>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
