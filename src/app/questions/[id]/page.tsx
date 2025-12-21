"use client";

import Grid from "@mui/material/Grid";
import { Paper, Typography, Box, Button, Fab } from "@mui/material";
import { useParams } from "next/navigation";
import { useQuestions } from "@/hooks/useQuestions";
import { Question } from "@/types/question";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function QuestionDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { questions } = useQuestions();

  const questionDetails = questions.find((q: Question) => q.id === id);

  const CustomRichTextEditor = dynamic(
    () =>
      import("@/components/molecules/CustomRichTextEditor").then(
        (mod) => mod.CustomRichTextEditor
      ),
    { ssr: false }
  );

  if (!questionDetails) return <LoadingSpinner />;
  return (
    <Box>
      <Box
        sx={{
          p: 3,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={3} sx={{ flex: 1, height: "100%" }}>
          {/* LEFT: QUESTION */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography
                variant="h5"
                sx={{
                  backgroundColor: "primary.light",
                  color: "white",
                  p: 2,
                  mb: 4,
                }}
                gutterBottom
              >
                {questionDetails.title}
              </Typography>

              <Typography>{questionDetails.summary}</Typography>
            </Paper>
          </Grid>

          {/* RIGHT: ANSWER */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ flex: 1, height: "100%" }}>
            <Paper
              sx={{
                p: 3,
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  backgroundColor: "primary.light",
                  color: "white",
                  p: 2,
                  mb: 4,
                }}
                gutterBottom
              >
                Answer
              </Typography>
              <CustomRichTextEditor />
              <Button variant="contained" sx={{ mt: 2 }}>
                Save Answer
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Fab color="primary" aria-label="add" href="/">
        <ArrowBackIosIcon />
      </Fab>
    </Box>
  );
}
