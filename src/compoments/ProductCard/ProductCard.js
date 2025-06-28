import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) { 
  const { image, name, price, priceDiscount, id } = product;

  const finalPrice = priceDiscount !== undefined ? priceDiscount : price;
  const hasDiscount = priceDiscount !== undefined && priceDiscount < price;

  return (
 <Link
      to={`/products/${id || name.toLowerCase().replace(/\s+/g, '-')}`} // Link dinâmico para a página de detalhes
      className="border border-drip-border rounded-lg p-4 text-center flex flex-col items-center shadow-md transition-transform duration-200 cursor-pointer max-w-[292px] hover:-translate-y-1 no-underline"
    >
     <img
        src={image}
        alt={name}
        className="max-w-full h-auto object-cover rounded-md mb-2.5 w-[292px] h-[321px]"
      />
      <h3 className="text-lg text-drip-heading my-2.5 min-h-[50px] overflow-hidden line-clamp-2 text-ellipsis">
        {name}
      </h3>
      <div className="flex items-baseline gap-2.5 mt-2.5">
        {hasDiscount && (
          <span className="text-gray-400 text-lg line-through">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
        )}
        <span className="text-drip-heading text-2xl font-bold">
          R$ {finalPrice.toFixed(2).replace('.', ',')}
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;