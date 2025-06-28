import React from 'react';
import Logo from 'src/compoments/Logo/Logo.js';
import Search from 'src/compoments/Header/Search.js';
import AuthLinks from 'src/compoments/Header/AuthLinks.js';
import Cart from 'src/compoments/Header/Cart.js';
import Navigation from 'src/compoments/Header/Navigation.js';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-100 py-4 px-8 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <Link to="/" className="no-underline">
          <Logo />
        </Link>
        <Search />
        <AuthLinks />
        <Cart />
      </div>
      <div className="flex justify-center pt-4 border-t border-gray-200">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;