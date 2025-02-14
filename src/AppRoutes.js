import './Reset.css';
import './Vars.css';
import './AppRoutes.css';
import './MediaQueries.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageBase from './Pages/PageBase';
import PageMain from './Pages/PageMain';
import PageCard from './Pages/PageCard';
import PageNotFound from './Pages/PageNotFound';
//npx json-server ./src/api-superHeroes/superHeroes.json --port 3001

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<PageBase />}>
          <Route index element={<PageMain />} />
          <Route path='/page-card' element={<PageCard />} />
        </Route>
        
        <Route path='*' element={<PageNotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
