// src/components/BuyBox/BuyBox.js

import React from 'react';
import StarIcon from 'src/assets/star-icon.svg'; // Ícone de estrela

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children, // Para componentes filhos como <ProductOptions />
  onAddToCart // Propriedade para a função de adicionar ao carrinho
}) {
  const finalPrice = priceDiscount !== undefined ? priceDiscount : price;
  const hasDiscount = priceDiscount !== undefined && priceDiscount < price;

  return (
    <div className="bg-white p-6 rounded-md shadow-lg"> {/* Estilo base do BuyBox */}
      {/* Nome do produto */}
      <h1 className="text-drip-dark-gray text-4xl font-bold mb-2">{name}</h1> {/* text-4xl = 32px */}

      {/* Referência do produto */}
      <p className="text-drip-dark-gray-3 text-xs mb-4">Ref: {reference}</p> {/* text-xs = 12px */}

      {/* Estrelas e Avaliações */}
      <div className="flex items-center mb-4">
        {/* Total de estrelas */}
        <div className="bg-drip-warning rounded-md px-2 py-1 flex items-center gap-1 mr-2">
          <span className="text-white text-sm font-semibold">{stars}</span> {/* text-sm = 14px */}
          <img src={StarIcon} alt="Star" className="w-3 h-3 invert" /> {/* w-3 h-3 para o ícone, invert para cor branca */}
        </div>
        {/* Total de avaliações */}
        <span className="text-drip-light-gray text-sm">{rating} Avaliações</span> {/* text-sm = 14px */}
      </div>

      {/* Preços */}
      <div className="flex items-baseline gap-3 mb-6">
        {hasDiscount && (
          <span className="text-drip-light-gray-2 text-base line-through"> {/* text-base = 16px */}
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
        )}
        <span className="text-drip-dark-gray-2 text-4xl font-bold"> {/* text-4xl = 32px */}
          R$ {finalPrice.toFixed(2).replace('.', ',')}
        </span>
      </div>

      {/* Descrição */}
      <p className="text-drip-dark-gray-2 text-sm leading-relaxed mb-6">{description}</p> {/* text-sm = 14px */}

      {/* Espaço para ProductOptions e outros filhos */}
      {children}

      {/* Botão Comprar */}
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