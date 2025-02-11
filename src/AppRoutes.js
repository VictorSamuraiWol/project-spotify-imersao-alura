import './Reset.css';
import './Vars.css';
import './AppRoutes.css';
import './MediaQueries.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageBase from './Pages/PageBase';
import PageMain from './Pages/PageMain';
import PageCard from './Pages/PageCard';

function AppRoutes() {
  return (
    // <div>
    //   <Sidebar />
    //   <HeaderMain />
    //   <Footer/>
    // </div>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<PageBase />}>
          <Route index element={<PageMain />} />
          <Route path='/page-card' element={<PageCard />} />
        </Route>
        
        <Route path='/page-not-found' element={<PageBase />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
