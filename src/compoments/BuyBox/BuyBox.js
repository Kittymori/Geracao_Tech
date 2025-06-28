import React from 'react';
import StarIcon from 'assets/star-icon.svg';

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  onAddToCart
}) {
  const finalPrice = priceDiscount !== undefined ? priceDiscount : price;
  const hasDiscount = priceDiscount !== undefined && priceDiscount < price;

  return (
    <div className="bg-white p-6 rounded-md shadow-lg">
      <h1 className="text-drip-dark-gray text-4xl font-bold mb-2">{name}</h1>

      <p className="text-drip-dark-gray-3 text-xs mb-4">Ref: {reference}</p>

      <div className="flex items-center mb-4">
        <div className="bg-drip-warning rounded-md px-2 py-1 flex items-center gap-1 mr-2">
          <span className="text-white text-sm font-semibold">{stars}</span>
          <img src={StarIcon} alt="Star" className="w-3 h-3 invert" />
        </div>
        <span className="text-drip-light-gray text-sm">{rating} Avaliações</span>
      </div>
      <div className="flex items-baseline gap-3 mb-6">
        {hasDiscount && (
          <span className="text-drip-light-gray-2 text-base line-through">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
        )}
        <span className="text-drip-dark-gray-2 text-4xl font-bold">
          R$ {finalPrice.toFixed(2).replace('.', ',')}
        </span>
      </div>

      <p className="text-drip-dark-gray-2 text-sm leading-relaxed mb-6">{description}</p>
      {children}
      <button
        onClick={onAddToCart}
        className="bg-drip-warning text-white text-base font-bold py-3 px-6 rounded-md w-full transition-colors duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-drip-warning focus:ring-offset-2"
      >
        Comprar
      </button>
    </div>
  );
}

export default BuyBox;