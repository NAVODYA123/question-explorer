import FileInput from "@/components/atoms/FileInput";
import { parseCsvFile } from "@/app/utils/parseCsvFile";
import { CsvRow } from "@/app/types/csv";

interface CsvUploaderProps {
  onDataLoaded: (data: CsvRow[]) => void;
}

const CsvUploader = ({ onDataLoaded }: CsvUploaderProps) => {
  const handleFile = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = await parseCsvFile(file);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDataLoaded(data as any);
  };

  return <FileInput onChange={handleFile} />;
};

export default CsvUploader;
