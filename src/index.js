// src/index.js (exemplo)

import React from 'react';
import ReactDOM from 'react-dom/client'; // Para React 18+
import App from './App'; // Importa o seu componente App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);