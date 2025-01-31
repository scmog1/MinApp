import { Route, Routes } from 'react-router-dom';
import Hjem from '../pages/Hjem';
import Baner from '../pages/Baner';
import Turnering from '../pages/Turnering';
import Bruker from '../pages/Bruker';
import Klubber from '../pages/Klubber';
import Error404 from '../pages/Error404';

// Importerer paths fra Routes.js
import {
  PATH_HJEM,
  PATH_TURNERING,
  PATH_BANER,
  PATH_BRUKER,
  PATH_KLUBBER,
  PATH_ERROR_404,
} from './Routes';

const Router = () => {
  return (
    <Routes>
      <Route path={`${PATH_HJEM}`} element={<Hjem />} />
      <Route path={`${PATH_BANER}`} element={<Baner />} />
      <Route path={`${PATH_TURNERING}`} element={<Turnering />} />
      <Route path={`${PATH_BRUKER}`} element={<Bruker />} />
      <Route path={`${PATH_KLUBBER}`} element={<Klubber />} />
      <Route path={`${PATH_ERROR_404}`} element={<Error404 />} />
    </Routes>
  );
};

export default Router;
