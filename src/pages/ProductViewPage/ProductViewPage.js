// src/pages/ProductViewPage/ProductViewPage.js

import React from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o ID do produto da URL
import Layout from 'src/components/Layout/Layout.js'; // Ajustado para 'components'
import Gallery from 'src/components/Gallery/Gallery.js'; // Ajustado para 'components'
import BuyBox from 'src/components/BuyBox/BuyBox.js'; // Ajustado para 'components'
import ProductOptions from 'src/components/ProductOptions/ProductOptions.js'; // Ajustado para 'components'
import Section from 'src/components/Section/Section.js'; // Ajustado para 'components'
import ProductListing from 'src/components/ProductListing/ProductListing.js'; // Ajustado para 'components'

function ProductViewPage() { // Nome do componente ajustado para ProductViewPage
  const { productId } = useParams(); // Para pegar o ID do produto da URL (se estiver usando rotas dinâmicas)

  // --- Dados MOCK do Produto (Substitua por dados reais da sua API) ---
  const product = {
    id: productId || 'produto-exemplo-123', // Usar ID da URL ou um padrão
    name: "Tênis Esportivo Pro Max",
    reference: "TENIS-PROMAX-X1Y2",
    stars: 4.5,
    rating: 128,
    price: 399.90,
    priceDiscount: 299.90,
    description: "Este tênis oferece o máximo em conforto e desempenho. Ideal para corrida e atividades diárias, com tecnologia de amortecimento avançada e design moderno. Possui cabedal em malha respirável, entressola responsiva e solado antiderrapante. Perfeito para quem busca estilo e funcionalidade.",
    images: [
      { src: "public/produc-image-1.jpeg" }, // Seu caminho original
      { src: "public/produc-image-2.jpeg" },
      { src: "public/produc-image-3.jpeg" },
      { src: "public/produc-image-4.jpeg" },
      { src: "public/produc-image-5.jpeg" }
    ],
    availableSizes: ['38', '39', '40', '41', '42', '43', '44'],
    availableColors: ['#000000', '#FFFFFF', '#FF0000', '#0000FF'] // Exemplo de cores em HEX
  };

  const recommendedProducts = [
    { id: 'rec1', name: "Camiseta Dry Fit", image: "public/product-thumb-6.jpeg", price: 99.90 },
    { id: 'rec2', name: "Short de Treino", image: "public/product-thumb-7.jpeg", price: 120.00, priceDiscount: 89.90 },
    { id: 'rec3', name: "Meia Esportiva (3 pares)", image: "public/product-thumb-8.jpeg", price: 45.00 },
    { id: 'rec4', name: "Garrafa Térmica", image: "public/product-thumb-9.jpeg", price: 70.00 },
    // Adicione mais produtos recomendados aqui
  ];

  const handleSizeSelect = (size) => {
    console.log("Tamanho selecionado:", size);
    // Lógica para atualizar o tamanho do produto selecionado
  };

  const handleColorSelect = (color) => {
    console.log("Cor selecionada:", color);
    // Lógica para atualizar a cor do produto selecionada
  };

  const handleAddToCart = () => {
    console.log("Produto adicionado ao carrinho!");
    // Lógica para adicionar o produto ao carrinho
  };

  return (
    <Layout>
      <div className="p-5 max-w-7xl mx-auto my-8">
        {/* Seção principal: Galeria e BuyBox */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* 7.1 - Componente de Galeria */}
          <div className="w-full lg:w-7/12">
            <Gallery
              images={product.images}
              width="700px"
              height="570px"
              radius="4px"
              showThumbs
            />
          </div>

          {/* 7.3 - Componente BuyBox */}
          <div className="w-full lg:w-5/12">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
              onAddToCart={handleAddToCart}
            >
              {/* Filhos da BuyBox: Opções do Produto */}
              <div className="mb-6">
                <h4 className="text-drip-dark-text text-base font-semibold mb-2">Tamanho:</h4>
                <ProductOptions
                  options={product.availableSizes}
                  radius="4px"
                  shape="square"
                  type="text"
                  onSelect={handleSizeSelect}
                />
              </div>

              <div className="mb-6">
                <h4 className="text-drip-dark-text text-base font-semibold mb-2">Cor:</h4>
                <ProductOptions
                  options={product.availableColors}
                  shape="circle"
                  type="color"
                  onSelect={handleColorSelect}
                />
              </div>

            </BuyBox>
          </div>
        </div>

        {/* 7.4 - Produtos Recomendados */}
        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={recommendedProducts} />
        </Section>
      </div>
    </Layout>
  );
}

export default ProductViewPage; // Exporta como ProductViewPage