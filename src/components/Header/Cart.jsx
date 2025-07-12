import React from 'react';
import { Link } from 'react-router-dom';
import CartSvg from '../../assets/mini-cart.svg';

function CartIcon() {
  const itemCount = 0;
  return (
    <Link to="/cart" className="flex items-center no-underline text-gray-800">
      <img src={CartSvg} alt="Carrinho de Compras" className="w-6 h-6 mr-1" />
      {itemCount > 0 && (
        <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center -ml-2 -mt-2">
          {itemCount}
        </span>
      )}
    </Link>
  );
}

export default CartIcon;