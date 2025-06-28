import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
     <ul className="list-none p-0 m-0 flex gap-8">
        <li>
          <NavLink
            to="/"
            end
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