import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ShowSearch from '../pages/ShowSearch';
import ShowDetails from '../pages/ShowDetails';
import NotFound from '../pages/NotFound';

const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<ShowSearch />} />,
    <Route
      path="show/:id"
      element={<ShowDetails />}
      loader={async ({ params }) => {
        return fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${params.id}`);
      }}
    />,
    <Route path="*" element={<NotFound />} />,
  ]),
);

export default Router;
