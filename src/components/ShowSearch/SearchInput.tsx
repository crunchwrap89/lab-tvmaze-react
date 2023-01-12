interface Props {
  query: string;
  setQuery: (e: string) => void;
}

function SearchInput({ query, setQuery }: Props) {
  return (
    <form>
      <label>
        Search show:
        <input className="ml-4 px-2 rounded" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
    </form>
  );
}
export default SearchInput;
