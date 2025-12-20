"use client";

import Grid from "@mui/material/Grid";
import { Paper, Typography, Box } from "@mui/material";
import { useParams } from "next/navigation";
import { useQuestions } from "@/hooks/useQuestions";
import { Question } from "@/types/question";
import dynamic from "next/dynamic";

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

  if (!questionDetails) return <div>Loading...</div>;
  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh", // full viewport height
        display: "flex",
        flexDirection: "column", // optional, depending on layout
      }}
    >
      <Grid container spacing={3} sx={{ flex: 1, height: "100%" }}>
        {/* LEFT: QUESTION */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h5" gutterBottom>
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
            <Typography variant="h5" gutterBottom>
              Answer
            </Typography>
            <CustomRichTextEditor />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
