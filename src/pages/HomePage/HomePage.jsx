import React from 'react';
import Layout from 'src/compoments/Layout/Layout.jsx';
import Gallery from 'src/compoments/Gallery/Gallery.jsx';
import Section from 'src/compoments/Section/Section.jsx';
import ProductListing from 'src/pages/ProdutListingPage/ProductListingPage.jsx';

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

const trendingProducts = [
  {
    id: 'tenis-rubro-negro',
    name: "Tênis Rubro-Negro",
    image: "public/produc-image-1.jpeg",
    price: 250.00,
    priceDiscount: 199.90
  },
  {
    id: 'tenis-vermelho-e-branco',
    name: "Tênis Vermelho e Branco",
    image: "public/produc-image-2.jpeg",
    price: 280.00
  },
  {
    id: 'sapato-social-marrom',
    name: "Sapato Social Marrom",
    image: "public/produc-image-3.jpeg",
    price: 350.00,
    priceDiscount: 280.00
  },
  {
    id: 'tenis-florest-z',
    name: "Tênis Florest Z",
    image: "public/produc-image-4.jpeg",
    price: 180.00
  },
  {
    id: 'tenis-esportivo-verde-neon',
    name: "Tênis Esportivo Verde Neon",
    image: "public/produc-image-5.jpeg",
    price: 350.00
  },
];


function HomePage() {
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
        <ProductListing products={trendingProducts} />
      </Section>
    </Layout>
  );
}

export default HomePage;