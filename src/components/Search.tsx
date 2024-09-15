import { AiOutlineSearch } from 'react-icons/ai';

type SearchProps = {
  value: string;
  onSearch: (searchTerm: string) => void;
};

const Search: React.FC<SearchProps> = ({ value, onSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-[450px] p-3 bg-[#F2F4F8] rounded-lg shadow-lg border border-gray-300 focus-within:border-purple-500 focus-within:ring-0">
      <div className="relative flex items-center">
        <AiOutlineSearch className="h-5 w-5 text-black opacity-80 absolute left-3" />
        <input
          type="text"
          placeholder="Search technologies we use at DC...."
          value={value}
          onChange={handleChange}
          className="w-full pl-10 bg-transparent border-0 rounded-md focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
