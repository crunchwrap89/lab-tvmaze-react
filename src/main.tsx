import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import './styles/global.css';
import { RecoilRoot } from 'recoil';
import ConnectionInfo from './components/ConnectionInfo/ConnectionInfo';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <ConnectionInfo />
    <RouterProvider router={Router} />
  </RecoilRoot>,
);
