import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    // Removida a classe 'primary-navigation' da tag <nav>, pois seus estilos
    // foram aplicados diretamente à <ul>.
    <nav>
      {/* Equivalent of .primary-navigation ul */}
      {/* list-none: remove os marcadores de lista
          p-0: padding: 0;
          m-0: margin: 0;
          flex: display: flex;
          gap-8: gap: 30px; (usando a escala Tailwind onde 1 unit = 4px, 8 units = 32px que é próximo de 30px) */}
      <ul className="list-none p-0 m-0 flex gap-8">
        {/* Equivalent of .primary-navigation li */}
        {/* flex: display: flex;
            items-center: align-items: center; */}
        <li>
          <NavLink
            to="/"
            end // 'end' é importante para a rota raiz "/" para que ela não fique 'active' quando outras rotas (ex: /products) também estiverem ativas.
            // Classes para .nav-link e .nav-link.active
            // no-underline: text-decoration: none;
            // text-drip-dark-text: sua cor personalizada #474747
            // text-base: font-size: 16px; (padrão Tailwind)
            // pb-1.5: padding-bottom: 6px; (próximo de 5px)
            // transition-colors duration-300: transição suave na mudança de cor em 0.3s
            // hover:text-gray-800: color: #251e1e; no hover
            // font-bold: font-weight: bold;
            // border-b-2: border-bottom: 2px;
            // border-drip-dark-text: cor de borda personalizada
            className={({ isActive }) =>
              `no-underline text-drip-dark-text text-base pb-1.5 transition-colors duration-300 hover:text-gray-800 ${
                isActive ? 'font-bold border-b-2 border-drip-dark-text' : ''
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `no-underline text-drip-dark-text text-base pb-1.5 transition-colors duration-300 hover:text-gray-800 ${
                isActive ? 'font-bold border-b-2 border-drip-dark-text' : ''
              }`
            }
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `no-underline text-drip-dark-text text-base pb-1.5 transition-colors duration-300 hover:text-gray-800 ${
                isActive ? 'font-bold border-b-2 border-drip-dark-text' : ''
              }`
            }
          >
            Categorias
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) =>
              `no-underline text-drip-dark-text text-base pb-1.5 transition-colors duration-300 hover:text-gray-800 ${
                isActive ? 'font-bold border-b-2 border-drip-dark-text' : ''
              }`
            }
          >
            Meus Pedidos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;