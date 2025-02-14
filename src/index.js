import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './AppRoutes';

// Obtém o elemento root do HTML e cria a raiz do React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza a aplicação dentro do StrictMode (ajuda na detecção de erros)
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
