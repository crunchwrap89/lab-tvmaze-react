import { IShowSearch } from '../../types';
import ShowCard from './ShowCard';

interface Props {
  results: IShowSearch[];
}

function SearchList({ results }: Props) {
  return (
    <>
      {results.length > 0 ? (
        <>
          {results.map((result, idx) => {
            return <ShowCard result={result} key={idx} />;
          })}
        </>
      ) : (
        <div className="p-2">
          <p>No results found</p>
        </div>
      )}
    </>
  );
}
export default SearchList;
