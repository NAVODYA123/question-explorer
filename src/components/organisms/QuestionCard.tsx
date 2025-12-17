/* eslint-disable @typescript-eslint/no-explicit-any */
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
    <Link href={`/question/${q.id}`} style={{ textDecoration: "none" }}>
      <Card variant="outlined" sx={{ mb: 2 }}>
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
