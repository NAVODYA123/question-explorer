"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Question, CsvQuestion } from "@/app/types/question";
import { DifficultyLevel } from "../constatnts/DifficultyLevel";

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/questions.csv")
      .then((res) => res.text())
      .then((text) => {
        const parsed = Papa.parse<CsvQuestion>(text, {
          header: true,
          skipEmptyLines: true,
        });

        const questionData: Question[] = parsed.data
          .filter((row) => row.qid && row.title)
          .map((row) => ({
            id: row.qid,
            title: row.title.trim(),
            difficulty: row.difficulty as DifficultyLevel,
            type: row.type,
            company: row.company_asked,
            votes: row["sum(cu.vote)"],
            summary: row.question_summary,
          }));
        const uniqueCompanies = Array.from(
          new Set(
            questionData
              .map((q) => q.company)
              .filter((c): c is string => Boolean(c))
          )
        ).sort();
        setQuestions(questionData);
        setCompanies(uniqueCompanies);
        setLoading(false);
      });
  }, []);

  return { questions, loading, companies };
}
