import { Input } from '@components';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBox = ({
  value,
  onChange,
  placeholder,
}: SearchInputProps) => {
  return (
    <div className="w-full">
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        icon="search"
        className="w-full"
      />
    </div>
  );
};
