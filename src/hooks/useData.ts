import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { IShowSearch } from '../types';

const queryState = atom({
  key: 'queryState',
  default: '',
});

const resultState = atom({
  key: 'resultState',
  default: [] as IShowSearch[],
});

function useData() {
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

  return { results, setResults, query, setQuery };
}

export default useData;
