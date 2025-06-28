// Exemplo: src/App.js (Ajuste conforme sua configuração de rotas)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'src/pages/HomePage/HomePage.js';
import ProductListingPage from 'src/pages/ProdutListingPage/ProductListingPage.js';
import ProductViewPage from 'src/pages/ProductViewPage/ProductViewPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:productId" element={<ProductViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;