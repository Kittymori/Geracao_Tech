import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import BuyBox from '../../components/BuyBox/BuyBox.jsx';
import ProductOptions from '../../components/ProductOptions/ProductOptions.jsx';
import Section from '../../components/Section/Section.jsx';


import api from '../../services/api';

function ProductViewPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const recommendedProducts = [
    { id: 'rec1', name: "Tênis 1", image: "public/product-thumb-4.jpeg", price: 99.90 },
    { id: 'rec2', name: "Tênis 2", image: "public/product-thumb-2.jpeg", price: 120.00, priceDiscount: 89.90 },
    { id: 'rec3', name: "Tênis 3", image: "public/product-thumb-3.jpeg", price: 45.00 },
    { id: 'rec4', name: "Tênis 4", image: "public/product-thumb-5.jpeg", price: 70.00 },
  ];

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        setError(null);  

        const response = await api.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (err) {
        console.error('Erro ao buscar detalhes do produto:', err);
        if (err.response && err.response.status === 404) {
          setError('Produto não encontrado.');
        } else {
          setError('Não foi possível carregar os detalhes do produto. Tente novamente mais tarde.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetails();
    } else {
      setLoading(false); 
      setError('ID do produto não fornecido na URL.');
    }
  }, [productId]);

  const handleSizeSelect = (size) => {
    console.log("Tamanho selecionado:", size);
  };

  const handleColorSelect = (color) => {
    console.log("Cor selecionada:", color);
  };

  const handleAddToCart = () => {
    console.log("Produto adicionado ao carrinho!");
  };

  if (loading) {
    return (
      <Layout>
        <div className="p-5 max-w-7xl mx-auto my-8 text-center">
          <p>Carregando detalhes do produto...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="p-5 max-w-7xl mx-auto my-8 text-center text-red-600">
          <p>{error}</p>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="p-5 max-w-7xl mx-auto my-8 text-center">
          <p>Nenhum produto para exibir.</p>
        </div>
      </Layout>
    );
  }

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

export default ProductViewPage;