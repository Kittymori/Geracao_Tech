import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link se quiser que o ícone do carrinho seja clicável
import CartSvg from '../../assets/mini-cart.svg'; // Caminho corrigido para o ícone SVG

function CartIcon() {
  const itemCount = 0; // Exemplo de contador de itens no carrinho, você pode integrar com seu estado real

  return (
    // Se você quiser que o ícone do carrinho seja um link para a página do carrinho,
    // envolva-o com <Link> e adicione as classes Tailwind a ele.
    // Equivalent of .cart-icon-container
    <Link to="/cart" className="flex items-center no-underline text-gray-800">
      {/* Equivalent of .cart-svg */}
      <img src={CartSvg} alt="Carrinho de Compras" className="w-6 h-6 mr-1" />
      {itemCount > 0 && (
        <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center -ml-2 -mt-2">
          {itemCount}
        </span>
      )}
    </Link>
    
    // Se não for um link, use apenas a div:
    /*
    <div className="flex items-center">
      <img src={CartSvg} alt="Carrinho de Compras" className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center -ml-2 -mt-2">
          {itemCount}
        </span>
      )}
    </div>
    */
  );
}

export default CartIcon;