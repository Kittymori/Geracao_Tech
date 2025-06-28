
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout.js';
import Gallery from 'src/components/Gallery/Gallery.js';
import BuyBox from 'src/components/BuyBox/BuyBox.js';
import ProductOptions from 'src/components/ProductOptions/ProductOptions.js';
import Section from 'src/components/Section/Section.js';
import ProductListing from 'src/components/ProductListing/ProductListing.js';

function ProductViewPage() {
  const { productId } = useParams();
  const product = {
    id: productId || 'produto-exemplo-123',
    name: "Tênis Esportivo Pro Max",
    reference: "TENIS-PROMAX-X1Y2",
    stars: 4.5,
    rating: 128,
    price: 399.90,
    priceDiscount: 299.90,
    description: "Este tênis oferece o máximo em conforto e desempenho. Ideal para corrida e atividades diárias, com tecnologia de amortecimento avançada e design moderno. Possui cabedal em malha respirável, entressola responsiva e solado antiderrapante. Perfeito para quem busca estilo e funcionalidade.",
    images: [
      { src: "public/produc-image-1.jpeg" },
      { src: "public/produc-image-2.jpeg" },
      { src: "public/produc-image-3.jpeg" },
      { src: "public/produc-image-4.jpeg" },
      { src: "public/produc-image-5.jpeg" }
    ],
    availableSizes: ['38', '39', '40', '41', '42', '43', '44'],
    availableColors: ['#000000', '#FFFFFF', '#FF0000', '#0000FF']
  };

  const recommendedProducts = [
    { id: 'rec1', name: "Tênis 1", image: "public/product-thumb-4.jpeg", price: 99.90 },
    { id: 'rec2', name: "Tênis 2", image: "public/product-thumb-2.jpeg", price: 120.00, priceDiscount: 89.90 },
    { id: 'rec3', name: "Tênis 3", image: "public/product-thumb-3.jpeg", price: 45.00 },
    { id: 'rec4', name: "Tênis 4", image: "public/product-thumb-5.jpeg", price: 70.00 },
  ];

  const handleSizeSelect = (size) => {
    console.log("Tamanho selecionado:", size)
  };

  const handleColorSelect = (color) => {
    console.log("Cor selecionada:", color);
  };

  const handleAddToCart = () => {
    console.log("Produto adicionado ao carrinho!")
  };

  return (
    <Layout>
      <div className="p-5 max-w-7xl mx-auto my-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="w-full lg:w-7/12">
            <Gallery
              images={product.images}
              width="700px"
              height="570px"
              radius="4px"
              showThumbs
            />
          </div>

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