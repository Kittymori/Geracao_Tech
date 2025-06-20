import React from 'react';
import Layout from '../../components/Layout/Layout'; // Caminho corrigido
import Gallery from '../../components/Gallery/Gallery'; // Caminho corrigido
import Section from '../../components/Section/Section'; // Caminho corrigido
import ProductListing from '../../components/ProductListing/ProductListing'; // Caminho corrigido

// Corrigido caminhos das imagens para refletir o diretório public/
const homeSlides = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
  { src: '/home-slide-6.jpeg' },
  { src: '/home-slide-7.jpeg' },
  { src: '/home-slide-8.jpeg' },
];

const trendingProducts = [
  {
    id: 'tenis-rubro-negro', // Adicionado ID para o ProductCard usar no link
    name: "Tênis Rubro-Negro",
    image: "/product-thumb-1.jpeg", // Caminho corrigido
    price: 250.00,
    priceDiscount: 199.90
  },
  {
    id: 'tenis-vermelho-e-branco',
    name: "Tênis Vermelho e Branco",
    image: "/product-thumb-2.jpeg", // Caminho corrigido
    price: 280.00
  },
  {
    id: 'sapato-social-marrom',
    name: "Sapato Social Marrom",
    image: "/product-thumb-3.jpeg", // Caminho corrigido
    price: 350.00,
    priceDiscount: 280.00
  },
  {
    id: 'tenis-florest-z',
    name: "Tênis Florest Z",
    image: "/product-thumb-4.jpeg", // Caminho corrigido
    price: 180.00
  },
  {
    id: 'tenis-esportivo-verde-neon',
    name: "Tênis Esportivo Verde Neon",
    image: "/product-thumb-5.jpeg", // Caminho corrigido
    price: 350.00
  },
];


function HomePage() {
  return (
    <Layout>
      {/* home-page div removida, pois não tinha estilos específicos no CSS fornecido */}
      
      {/* Classe para .home-main-gallery */}
      {/* mb-12: margin-bottom de 50px */}
      <Gallery
        images={homeSlides}
        width="1440"
        height="681"
        radius="0px"
        showThumbs={false}
        className="mb-12" // Aplicando a classe Tailwind aqui
      />

      <Section title="Coleções em destaque" titleAlign="center">
        {/* Classes para .collections-highlight e suas media queries */}
        {/* flex justify-center gap-8 flex-wrap px-5: display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; padding: 0 20px;
            md:gap-5: Media query para max-width: 768px (MD breakpoint), gap: 20px;
            md:flex-1 md:basis-[45%] md:max-w-[45%]: Media query para MD breakpoint, flex: 1 1 45%; max-width: 45%;
            sm:flex-col sm:items-center: Media query para max-width: 480px (SM breakpoint), flex-direction: column; align-items: center;
            sm:w-[90%] sm:max-w-[350px]: Media query para SM breakpoint, width: 90%; max-width: 350px; */}
        <div className="flex justify-center gap-8 flex-wrap px-5 md:gap-5 sm:flex-col sm:items-center">
          {/* Classes para .collection-item e suas media queries */}
          {/* md:flex-1 md:basis-[45%] md:max-w-[45%]: Flex item para MD breakpoint
              sm:w-[90%] sm:max-w-[350px]: Largura para SM breakpoint */}
          <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
            {/* Classes para .collection-item img e .collection-item img:hover */}
            {/* max-w-full h-auto block: max-width: 100%; height: auto; display: block;
                shadow-md: box-shadow (0 4px 8px rgba(0,0,0,0.1))
                transition-transform duration-200: transição de 0.2s
                hover:-translate-y-1: transform: translateY(-5px) no hover
                rounded-md: border-radius: 4px; */}
            <img src="/collection-1.png" alt="Coleção 1" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
          </div>
          <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
            <img src="/collection-2.png" alt="Coleção 2" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
          </div>
          <div className="md:flex-1 md:basis-[45%] md:max-w-[45%] sm:w-[90%] sm:max-w-[350px]">
            <img src="/collection-3.png" alt="Coleção 3" className="max-w-full h-auto block shadow-md transition-transform duration-200 hover:-translate-y-1 rounded-md" />
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