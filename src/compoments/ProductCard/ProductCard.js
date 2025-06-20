import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link para o card ser clicável

function ProductCard({ product }) { // Recebendo 'product' como um objeto para melhor organização
  const { image, name, price, priceDiscount, id } = product; // Desestruturando props

  const finalPrice = priceDiscount !== undefined ? priceDiscount : price;
  const hasDiscount = priceDiscount !== undefined && priceDiscount < price;

  return (
    // O card inteiro agora é um link.
    // classes para .product-card e .product-card:hover
    // border border-drip-border: borda de 1px com cor personalizada #928d8d
    // rounded-lg: border-radius de 8px
    // p-4: padding de 16px (próximo de 15px)
    // text-center: text-align: center;
    // flex flex-col items-center: display: flex; flex-direction: column; align-items: center;
    // shadow-md: box-shadow (padrão Tailwind, similar ao 0 2px 5px rgba(2, 2, 2, 0.05))
    // transition-transform duration-200: transição para o hover em 0.2s
    // cursor-pointer: cursor: pointer;
    // max-w-[292px]: max-width: 292px; (valores exatos em colchetes)
    // hover:-translate-y-1: transform: translateY(-4px); no hover (próximo de -5px)
    // no-underline: remove sublinhado do link
    <Link
      to={`/products/${id || name.toLowerCase().replace(/\s+/g, '-')}`} // Link dinâmico para a página de detalhes
      className="border border-drip-border rounded-lg p-4 text-center flex flex-col items-center shadow-md transition-transform duration-200 cursor-pointer max-w-[292px] hover:-translate-y-1 no-underline"
    >
      {/* classes para .product-card-image */}
      {/* max-w-full: max-width: 100%;
          h-auto: height: auto;
          object-cover: object-fit: cover;
          rounded-md: border-radius de 4px
          mb-2.5: margin-bottom de 10px
          width-[292px] h-[321px]: valores exatos de width e height */}
      <img
        src={image}
        alt={name}
        className="max-w-full h-auto object-cover rounded-md mb-2.5 w-[292px] h-[321px]"
      />
      {/* classes para .product-card-name */}
      {/* text-lg: font-size: 18px;
          text-drip-heading: sua cor personalizada #1F1F1F
          my-2.5: margin vertical de 10px
          min-h-[50px]: min-height: 50px;
          overflow-hidden: esconde conteúdo que excede o elemento
          line-clamp-2: Limita o texto a 2 linhas e adiciona reticências (requer @tailwindcss/line-clamp plugin)
          text-ellipsis: adiciona reticências ao final do texto truncado (geralmente usado com overflow-hidden e whitespace-nowrap, ou line-clamp) */}
      <h3 className="text-lg text-drip-heading my-2.5 min-h-[50px] overflow-hidden line-clamp-2 text-ellipsis">
        {name}
      </h3>
      {/* classes para .product-card-prices */}
      {/* flex: display: flex;
          items-baseline: align-items: baseline;
          gap-2.5: gap: 10px;
          mt-2.5: margin-top: 10px; */}
      <div className="flex items-baseline gap-2.5 mt-2.5">
        {hasDiscount && (
          // classes para .product-original-price (quando há desconto)
          // text-gray-400: cor cinza (equivalente a #8F8F8F)
          // text-lg: font-size: 18px;
          // line-through: text-decoration: line-through;
          <span className="text-gray-400 text-lg line-through">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
        )}
        {/* classes para .product-final-price
            text-drip-heading: sua cor personalizada #1F1F1F
            text-2xl: font-size: 24px;
            font-bold: font-weight: bold; */}
        <span className="text-drip-heading text-2xl font-bold">
          R$ {finalPrice.toFixed(2).replace('.', ',')}
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;