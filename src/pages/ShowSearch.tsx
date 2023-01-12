import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { IShowSearch } from '../types';
import SearchInput from '../components/ShowSearch/SearchInput';
import SearchList from '../components/ShowSearch/SearchList';
import Separator from '../components/Layout/Separator';

const queryState = atom({
  key: 'queryState',
  default: '',
});

const resultState = atom({
  key: 'resultState',
  default: [] as IShowSearch[],
});

function ShowSearch() {
  const [query, setQuery] = useRecoilState(queryState);
  const [results, setResults] = useRecoilState(resultState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const results = (await response.json()) as IShowSearch[];
      setResults(results);
    };
    fetchData().catch(console.error);
  }, [query]);

  return (
    <div className="w-full bg-white flex flex-col">
      <div className="h-[200px] bg-slate-100">
        <div className="h-full flex justify-center items-center">
          <SearchInput query={query} setQuery={setQuery} />
        </div>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-1 gap-4 p-2">
        <SearchList results={results} />
      </div>
      <Separator />
    </div>
  );
}

export default ShowSearch;
