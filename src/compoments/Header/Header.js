import React from 'react';
import Logo from '../../components/Logo/Logo'; // Ajuste conforme seu caminho real (se Logo não está dentro de Header/)
import Search from '../../components/SearchBar/SearchBar'; // Se Search.js está em SearchBar/
import AuthLinks from '../../components/AuthLinks/AuthLinks'; // Se AuthLinks.js está em AuthLinks/
import Cart from '../../components/CartIcon/CartIcon'; // Se Cart.js está em CartIcon/
import Navigation from '../../components/PrimaryNavigation/PrimaryNavigation'; // Se Navigation.js está em PrimaryNavigation/
import { Link } from 'react-router-dom'; // Necessário se seu Logo linkar para a home

function Header() {
  return (
    // Equivalent of .app-header
    // bg-gray-100: cor de fundo próxima ao #f8f8f8
    // py-4: padding vertical (16px)
    // px-8: padding horizontal (32px)
    // shadow-md: sombra leve
    <header className="bg-gray-100 py-4 px-8 shadow-md">
      {/* Equivalent of .header-top */}
      {/* flex: display flex
          justify-between: justify-content space-between
          items-center: align-items center
          mb-4: margin-bottom (16px) */}
      <div className="flex justify-between items-center mb-4">
        {/* Adicione Link se o Logo deve ser clicável e levar à página inicial */}
        <Link to="/" className="no-underline">
          <Logo />
        </Link>
        <Search />
        <AuthLinks />
        <Cart />
      </div>
      {/* Equivalent of .header-bottom */}
      {/* flex: display flex
          justify-center: justify-content center
          pt-4: padding-top (16px)
          border-t: border-top
          border-gray-200: cor da borda, próxima ao padrão do React */}
      <div className="flex justify-center pt-4 border-t border-gray-200">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;