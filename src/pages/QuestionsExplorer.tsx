"use client";

import { useState } from "react";
import CsvUploader from "../components/molecules/CsvUploader";
import CsvTable from "../components/organisms/CsvTable";
import { CsvRow } from "@/app/types/csv";

const QuestionExplorer = () => {
  const [questions, setQuestions] = useState<CsvRow[]>([]);

  return (
    <>
      <CsvUploader onDataLoaded={setQuestions} />
      <CsvTable data={questions} />
    </>
  );
};

export default QuestionExplorer;
