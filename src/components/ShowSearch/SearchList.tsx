import { IShowSearch } from '../../types';
import ShowCard from './ShowCard';

interface Props {
  results: IShowSearch[];
  query: string;
}

function SearchList({ results, query }: Props) {
  return (
    <>
      {results.length > 0 ? (
        <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-1 gap-4 p-2">
          {results.map((result, idx) => {
            return <ShowCard result={result} key={idx} />;
          })}
        </div>
      ) : (
        <div className="p-2 flex justify-center items-center">
          {query.length > 0 ? <p>No results found</p> : <p>Search something</p>}
        </div>
      )}
    </>
  );
}
export default SearchList;
