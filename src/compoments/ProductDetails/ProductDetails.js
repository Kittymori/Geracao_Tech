// src/pages/ProductsPage/ProductsPage.js

import React, { useState, useEffect } from 'react';
import Layout from 'src\compoments\Layout\Layout.js';
import SortBy from 'src\compoments\SortBy\SortBy.js';
import FilterGroup from 'src\compoments\FilterGroup\FilterGroup.js';
import Section from 'src\compoments\Section\Section.js';
import ProductListing from 'src\compoments\ProductListing\ProductListing.js';

// Dados de exemplo para seus produtos
// Adicione ou remova produtos aqui conforme a necessidade do seu projeto
const allProducts = [
  { id: 'p1', name: "Tênis Azul", image: "public\\product-thumb-1.jpeg", price: 250.00, priceDiscount: 199.90, category: 'Tenis', brand: 'Marca A' },
  { id: 'p2', name: "Camiseta Branca", image: "public\\product-thumb-2.jpeg", price: 80.00, category: 'Camisetas', brand: 'Marca B' },
  { id: 'p3', name: "Calça Jeans", image: "public\\product-thumb-3.jpeg", price: 350.00, priceDiscount: 280.00, category: 'Calcas', brand: 'Marca A' },
  { id: 'p4', name: "Boné Preto", image: "public\\product-thumb-4.jpeg", price: 180.00, category: 'Acessórios', brand: 'Marca C' },
  { id: 'p5', name: "Meia Esportiva", image: "public\\product-thumb-5.jpeg", price: 50.00, category: 'Acessórios', brand: 'Marca B' },
  { id: 'p6', name: "Óculos de Sol", image: "public\\product-thumb-6.jpeg", price: 120.00, category: 'Acessórios', brand: 'Marca C' },
  { id: 'p7', name: "Bolsa Pequena", image: "public\\product-thumb-7.jpeg", price: 70.00, category: 'Acessórios', brand: 'Marca A' },
  { id: 'p8', name: "Cinto Couro", image: "public\\product-thumb-8.jpeg", price: 90.00, priceDiscount: 75.00, category: 'Acessórios', brand: 'Marca B' },
  { id: 'p9', name: "Jaqueta Esportiva", image: "public\\product-thumb-9.jpeg", price: 450.00, category: 'Jaquetas', brand: 'Marca A' },
  { id: 'p10', name: "Chinelo de Praia", image: "public\\product-thumb-10.jpeg", price: 60.00, category: 'Calçados', brand: 'Marca B' },
  // ... adicione mais produtos conforme necessário
];

function ProductsPage() {
  // Estados para gerenciar a lista de produtos exibida, a ordem de classificação e os filtros aplicados
  const [products, setProducts] = useState(allProducts);
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({ categories: [], brands: '' });

  // Efeito que reage a mudanças na ordem de classificação ou nos filtros
  // Ele filtra e ordena a lista de produtos 'allProducts' e atualiza o estado 'products'
  useEffect(() => {
    let filteredAndSortedProducts = [...allProducts]; // Começa com uma cópia de todos os produtos

    // Aplica os filtros de categoria (checkbox)
    if (filters.categories.length > 0) {
      filteredAndSortedProducts = filteredAndSortedProducts.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    // Aplica o filtro de marca (radio button)
    if (filters.brands) {
        filteredAndSortedProducts = filteredAndSortedProducts.filter(product =>
            product.brand === filters.brands
        );
    }

    // Aplica a ordenação
    if (sortOrder === 'lowest_price') {
      filteredAndSortedProducts.sort((a, b) => (a.priceDiscount || a.price) - (b.priceDiscount || b.price));
    } else if (sortOrder === 'highest_price') {
      filteredAndSortedProducts.sort((a, b) => (b.priceDiscount || b.price) - (a.priceDiscount || a.price));
    }

    setProducts(filteredAndSortedProducts); // Atualiza o estado dos produtos que serão exibidos
  }, [sortOrder, filters]); // Este efeito será re-executado quando 'sortOrder' ou 'filters' mudarem

  // Handler para quando a ordenação muda
  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  // Handler para quando um filtro muda (checkbox ou radio)
  const handleFilterChange = (value, isChecked, type) => {
    setFilters(prevFilters => {
      if (type === 'checkbox') {
        // Para checkboxes, adiciona ou remove o valor do array de categorias
        const updatedCategories = isChecked
          ? [...prevFilters.categories, value]
          : prevFilters.categories.filter(cat => cat !== value);
        return { ...prevFilters, categories: updatedCategories };
      } else if (type === 'radio') {
        // Para radio buttons, define o valor ou limpa se a mesma opção for clicada novamente
        const newBrand = prevFilters.brands === value ? '' : value;
        return { ...prevFilters, brands: newBrand };
      }
      return prevFilters;
    });
  };

  return (
    <Layout>
      <div className="flex"> {/* Container principal que divide a página em lateral e conteúdo */}
        {/* Lateral esquerda da página para filtros e ordenação */}
        <div className="w-[308px] p-4 border-r border-gray-200">
          <div className="bg-white p-4 rounded-md shadow-sm">
            {/* Título da seção de filtros */}
            <h3 className="text-drip-dark-text text-base font-semibold mb-2">
              Filtrar por
            </h3>
            {/* Linha divisória */}
            <hr className="border-b border-drip-light-border pb-4 mb-4" />

            {/* Componente de Ordenação por preço */}
            <SortBy onSortChange={handleSortChange} />

            {/* Grupo de filtro por Categoria (checkboxes) */}
            <FilterGroup
              title="Por Categoria"
              inputType="checkbox"
              options={[
                { text: "Tênis", value: "Tenis" },
                { text: "Camisetas", value: "Camisetas" },
                { text: "Calças", value: "Calcas" },
                { text: "Acessórios", value: "Acessórios" },
                { text: "Jaquetas", value: "Jaquetas" },
                { text: "Calçados", value: "Calçados" },
              ]}
              onFilterChange={handleFilterChange}
              selectedValues={filters.categories} // Passa os valores de categorias selecionados
            />

            {/* Grupo de filtro por Marca (radio buttons) */}
            <FilterGroup
              title="Por Marca"
              inputType="radio"
              options={[
                { text: "Marca A", value: "Marca A" },
                { text: "Marca B", value: "Marca B" },
                { text: "Marca C", value: "Marca C" },
              ]}
              onFilterChange={handleFilterChange}
              selectedValues={[filters.brands]} // Passa a marca selecionada (como array para consistência)
            />
            {/* Adicione outros grupos de filtro aqui conforme necessário (ex: por preço, por avaliação) */}
          </div>
        </div>

        {/* Área principal para a listagem de produtos */}
        <div className="flex-grow p-4">
          {/* Seção que contém o título dinâmico e a listagem de produtos */}
          <Section
            title={`Total de produtos encontrados: ${products.length}`} // Título dinâmico que mostra a contagem
            titleAlign="left"
          >
            <ProductListing products={products} /> {/* Componente que exibe a grade de produtos */}
          </Section>
        </div>
      </div>
    </Layout>
  );
}

export default ProductsDetails;