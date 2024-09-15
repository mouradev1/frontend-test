import './App.css';
import Search from './components/Search';
import Tag from './components/Tags';
import Cards from './components/Cards';
import { useState, useEffect } from 'react';
import { searchData } from './services/Api';
import { CardProps } from './@types/cards';

const App = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resultMsg, setResultMsg] = useState('No results');
  const tags = ['Languages', 'Build', 'Design', 'Cloud'];

  const handleSearch = async (searchTerm: string) => {
    setSearch(searchTerm);
    setLoading(true);
    try {
      const data = await searchData(searchTerm);
      if (!data.length) {
        setResultMsg('No results');
      } else {
        setResultMsg('');
      }
      setFilteredCards(data);
    } catch (error) {
      setError('Something went wrong, but this is not your fault : )');
    } finally {
      setLoading(false);
    }
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    handleSearch(tag);
  };
  useEffect(() => {
    if (!loading && !filteredCards.length && !error) {
      setSelectedTag(null);
    }
  }, [loading, filteredCards, error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-[480px] h-[450px] bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col items-center">
            <Search value={search} onSearch={handleSearch} />
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  label={tag}
                  onClick={() => handleTagClick(tag)}
                  isSelected={selectedTag === tag}
                />
              ))}
            </div>
          </div>
          {error && (
            <img src="/img/error.png" alt="error" className="w-16 h-16 mx-auto mt-4" />
          )}
          {loading && (
            <div className="flex justify-center items-center h-full">
              <div className="relative w-12 h-12">
                <div className="absolute w-full h-full border-4 border-t-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          )}
          {!loading && !filteredCards.length && !error && (
            <img
              src="/img/Searching.png"
              alt="search"
              className="w-24 h-24 mx-auto filter brightness-100 mt-4  w-24 h-24 mx-auto filter brightness-100 mt-4"
            />
          )}
          {!loading && filteredCards.length > 0 && (
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto h-[250px]">
              {filteredCards.map((card: CardProps) => (
                <Cards key={card.title} {...card} />
              ))}
            </div>
          )}
        </div>
        <div className="mt-auto text-xs text-gray-500 text-left">
          <hr className="border-gray-300 my-4" />
          <p>
            {resultMsg || `${filteredCards.length} results`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
