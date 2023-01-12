import SearchInput from '../components/ShowSearch/SearchInput';
import SearchList from '../components/ShowSearch/SearchList';
import Separator from '../components/Layout/Separator';
import useData from '../hooks/useData';

function ShowSearch() {
  const { results, query, setQuery } = useData();

  return (
    <div className="w-full bg-white flex flex-col">
      <div className="h-[200px] bg-slate-100">
        <div className="h-full flex justify-center items-center">
          <SearchInput query={query} setQuery={setQuery} />
        </div>
      </div>
      <SearchList results={results} query={query} />
      <Separator />
    </div>
  );
}

export default ShowSearch;
