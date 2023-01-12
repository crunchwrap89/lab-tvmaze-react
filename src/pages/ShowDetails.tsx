import { IShow } from '../types';
import { useLoaderData } from 'react-router-dom';
import HomeLink from '../components/Navigation/HomeLink';
import ShowImage from '../components/ShowDetails/ShowImage';
import ShowSummary from '../components/ShowDetails/ShowSummary';
import ShowNotFound from '../components/ShowDetails/ShowNotFound';
import Separator from '../components/Layout/Separator';

function ShowDetails() {
  const show = useLoaderData() as IShow | null;
  if (!show) return ShowNotFound();

  return (
    <div className="w-full bg-slate-50 flex flex-col sm:justify-center sm:items-center">
      <HomeLink />
      <div className="rounded flex justify-center items-center p-4">
        <div className="flex flex-col sm:flex-row">
          <ShowImage image={show.image} />
          <ShowSummary summary={show.summary} />
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default ShowDetails;
