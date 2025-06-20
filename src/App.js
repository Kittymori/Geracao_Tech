// Exemplo: src/App.js (Ajuste conforme sua configuração de rotas)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage'; // Importe a página de listagem
import ProductViewPage from './pages/ProductViewPage/ProductViewPage'; // Importe a página de visualização

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Rota para a listagem de produtos */}
        <Route path="/products" element={<ProductListingPage />} />
        {/* Rota para a visualização de um produto específico (com ID dinâmico) */}
        <Route path="/product/:productId" element={<ProductViewPage />} /> {/* Usando ProductViewPage */}
        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
}

export default App;