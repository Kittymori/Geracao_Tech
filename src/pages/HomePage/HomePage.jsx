import React, { useState, useEffect } from 'react';
import Layout from 'src/components/Layout/Layout.jsx';
import Gallery from 'src/components/Gallery/Gallery.jsx';
import Section from 'src/components/Section/Section.jsx';
import ProductListing from 'src/pages/ProductListingPage/ProductListingPage.jsx';

import api from 'src/services/api.js';

const homeSlides = [
  { src: 'public/home-slide-1.jpeg' },
  { src: 'public/home-slide-2.jpeg' },
  { src: 'public/home-slide-3.jpeg' },
  { src: 'public/home-slide-4.jpeg' },
  { src: 'public/home-slide-5.jpeg' },
  { src: 'public/home-slide-6.jpeg' },
  { src: 'public/home-slide-7.jpeg' },
  { src: 'public/home-slide-8.jpeg' },
];


function HomePage() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);   

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        setLoading(true);
        setError(null); 
        const response = await api.get('/api/products?limit=5&sort=sales');
        setTrendingProducts(response.data);
      } catch (err) {
        console.error('Erro ao buscar produtos em alta:', err);
        setError('Não foi possível carregar os produtos em alta.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingProducts();
  }, []);

  if (loading) {
    return (
      <Layout>
        <Gallery
          images={homeSlides}
          width="1440"
          height="681"
          radius="0px"
          showThumbs={false}
          className="mb-12"
        />

        <Section title="Coleções em destaque" titleAlign="center">
          <div className="flex justify-center gap-8 flex-wrap px-5 md:gap-5 sm:flex-col sm:items-center">
            <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
              <img src="public/collection-1.png" alt="Coleção 1" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
            </div>
            <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
              <img src="public/collection-2.png" alt="Coleção 2" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
            </div>
            <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
              <img src="public/collection-3.png" alt="Coleção 3" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
            </div>
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left">
          <p className="text-center">Carregando produtos em alta...</p>
        </Section>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Gallery
          images={homeSlides}
          width="1440"
          height="681"
          radius="0px"
          showThumbs={false}
          className="mb-12"
        />

        <Section title="Coleções em destaque" titleAlign="center">
          <div className="flex justify-center gap-8 flex-wrap px-5 md:gap-5 sm:flex-col sm:items-center">
            <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
              <img src="public/collection-1.png" alt="Coleção 1" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
            </div>
            <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
              <img src="public/collection-2.png" alt="Coleção 2" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
            </div>
            <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
              <img src="public/collection-3.png" alt="Coleção 3" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
            </div>
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left">
          <p className="text-center text-red-600">{error}</p>
        </Section>
      </Layout>
    );
  }


  return (
    <Layout>
      <Gallery
        images={homeSlides}
        width="1440"
        height="681"
        radius="0px"
        showThumbs={false}
        className="mb-12"
      />

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="flex justify-center gap-8 flex-wrap px-5 md:gap-5 sm:flex-col sm:items-center">
          <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
            <img src="public/collection-1.png" alt="Coleção 1" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
          </div>
          <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
            <img src="public/collection-2.png" alt="Coleção 2" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
          </div>
          <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
            <img src="public/collection-3.png" alt="Coleção 3" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
          </div>
        </div>
      </Section>

      <Section title="Produtos em alta" titleAlign="left">
        {trendingProducts.length > 0 ? (
          <ProductListing products={trendingProducts} />
        ) : (
          <p className="text-center">Nenhum produto em alta encontrado.</p>
        )}
      </Section>
    </Layout>
  );
}

export default HomePage;