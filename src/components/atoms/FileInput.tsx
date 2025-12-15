interface FileInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({ onChange }: FileInputProps) => {
  return <input type="file" accept=".csv" onChange={onChange} />;
};

export default FileInput;
