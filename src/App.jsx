import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.jsx';
import ProductListingPage from '../pages/ProdutListingPage/ProductListingPage.jsx';
import ProductViewPage from '../pages/ProductViewPage/ProductViewPage.jsx';

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