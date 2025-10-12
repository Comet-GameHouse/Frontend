import { Input } from '@components';

interface Props {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const HelpSearch = ({ searchQuery, onSearchChange }: Props) => {
  return (
    <div className="mb-8 sm:mb-12 max-w-4xl mx-auto">
      <div data-aos="fade-up" data-aos-delay="150">
        <Input
          type="text"
          placeholder="What do you need help with? Search for topics..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-gray-800/50 border-gray-700 text-white text-lg py-4 px-6"
          icon="search"
        />
      </div>
    </div>
  );
};