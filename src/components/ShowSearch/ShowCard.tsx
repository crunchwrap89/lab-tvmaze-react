import { IShowSearch } from '../../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  result: IShowSearch;
}
function ShowCard({ result }: Props) {
  const navigate = useNavigate();

  function goToShowDetails(id: number) {
    navigate(`/show/${id}`);
  }

  return (
    <div
      className="h-[200px] bg-slate-50 hover:bg-slate-100 transition-colors shadow-md rounded flex justify-center items-center cursor-pointer text-center relative p-4"
      onClick={() => {
        goToShowDetails(result.show.externals.thetvdb);
      }}
    >
      {result.show.name}
    </div>
  );
}
export default ShowCard;
