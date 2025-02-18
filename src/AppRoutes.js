import './Reset.css';
import './Vars.css';
import './AppRoutes.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageBase from './Pages/PageBase';
import PageMain from './Pages/PageMain';
import PageCard from './Pages/PageCard';
import PageNotFound from './Pages/PageNotFound';
// Comando para rodar o servidor JSON localmente na porta 3001 
//npx json-server ./src/api-superHeroes/superHeroes.json --port 3001

function AppRoutes() {
  return (
    <BrowserRouter> {/* Define o roteador principal */}
      <Routes> {/* Define as rotas da aplicação */}

        {/* Rota base com sub-rotas */}
        <Route path='/' element={<PageBase />}>
          <Route index element={<PageMain />} /> {/* Página inicial */}
          <Route path='/page-card/:id' element={<PageCard />} /> {/* Página de card */}
        </Route>
        
        {/* Rota para páginas não encontradas (404) */}
        <Route path='*' element={<PageNotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes; // Exporta o componente de rotas
