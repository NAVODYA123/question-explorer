import { Card, CardContent } from "@mui/material";
import Link from "next/link";
import { QuestionHeader } from "@/components/molecules/QuestionsHeader";
import { QuestionMeta } from "@/components/molecules/QuestionsMeta";
import { Question } from "@/types/question";
import { QuestionBody } from "./QuestionBody";

type QuestionCardProps = {
  q: Question;
};

export function QuestionCard({ q }: QuestionCardProps) {
  return (
    <Link href={`/questions/${q.id}`} style={{ textDecoration: "none" }}>
      <Card
        variant="outlined"
        elevation={5}
        sx={{
          mb: 2,
          borderRadius: 2,
          backgroundColor: "#fafafa",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)", // soft paper shadow
        }}
      >
        <CardContent>
          <QuestionHeader title={q.title} difficulty={q.difficulty} />
          <QuestionBody question={q.summary} />
          <QuestionMeta
            questionMetaData={{
              type: q.type,
              company: q.company,
              votes: q.votes,
            }}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
