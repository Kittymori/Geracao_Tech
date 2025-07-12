import React from 'react';
import Logo from '../../components/Logo/Logo.jsx';
import Search from '../../components/Header/Search.jsx';
import AuthLinks from '../../components/Header/AuthLinks.jsx';
import Cart from '../../components/Header/Cart.jsx';
import Navigation from '../../components/Header/Navigation.jsx';
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