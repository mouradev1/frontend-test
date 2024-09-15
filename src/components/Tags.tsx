import { AiOutlineTag } from 'react-icons/ai';

type TagProps = {
  label: string;
  onClick: () => void;
  isSelected: boolean;
};

const Tag: React.FC<TagProps> = ({ label, onClick, isSelected }) => {
  return (
    <span
      onClick={onClick}
      className={`px-3 py-1 rounded-full cursor-pointer ${isSelected ? 'bg-purple-600 text-white' : 'bg-gray-200 text-purple-600'}`}
    >
      <AiOutlineTag className="inline-block mr-1 -mt-0.5" />
      {label}
    </span>
  );
};

export default Tag;
