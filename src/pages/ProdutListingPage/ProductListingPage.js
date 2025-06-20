// src/pages/ProductListingPage/ProductListingPage.js

import React, { useState, useEffect } from 'react';
import Layout from 'src/components/Layout/Layout.js'; // Ajustado para 'components'
import SortBy from 'src/components/SortBy/SortBy.js'; // Ajustado para 'components'
import FilterGroup from 'src/components/FilterGroup/FilterGroup.js'; // Ajustado para 'components'
import Section from 'src/components/Section/Section.js'; // Ajustado para 'components'
import ProductListing from 'src/components/ProductListing/ProductListing.js'; // Ajustado para 'components'

// Dados de exemplo para seus produtos
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

function ProductListingPage() {
  const [products, setProducts] = useState(allProducts);
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({ categories: [], brands: '' });

  useEffect(() => {
    let filteredAndSortedProducts = [...allProducts];

    if (filters.categories.length > 0) {
      filteredAndSortedProducts = filteredAndSortedProducts.filter(product =>
        filters.categories.includes(product.category)
      );
    }
    if (filters.brands) {
        filteredAndSortedProducts = filteredAndSortedProducts.filter(product =>
            product.brand === filters.brands
        );
    }

    if (sortOrder === 'lowest_price') {
      filteredAndSortedProducts.sort((a, b) => (a.priceDiscount || a.price) - (b.priceDiscount || b.price));
    } else if (sortOrder === 'highest_price') {
      filteredAndSortedProducts.sort((a, b) => (b.priceDiscount || b.price) - (a.priceDiscount || a.price));
    }

    setProducts(filteredAndSortedProducts);
  }, [sortOrder, filters]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleFilterChange = (value, isChecked, type) => {
    setFilters(prevFilters => {
      if (type === 'checkbox') {
        const updatedCategories = isChecked
          ? [...prevFilters.categories, value]
          : prevFilters.categories.filter(cat => cat !== value);
        return { ...prevFilters, categories: updatedCategories };
      } else if (type === 'radio') {
        const newBrand = prevFilters.brands === value ? '' : value;
        return { ...prevFilters, brands: newBrand };
      }
      return prevFilters;
    });
  };

  return (
    <Layout>
      <div className="flex">
        <div className="w-[308px] p-4 border-r border-gray-200">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-drip-dark-text text-base font-semibold mb-2">
              Filtrar por
            </h3>
            <hr className="border-b border-drip-light-border pb-4 mb-4" />

            <SortBy onSortChange={handleSortChange} />

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
              selectedValues={filters.categories}
            />

            <FilterGroup
              title="Por Marca"
              inputType="radio"
              options={[
                { text: "Marca A", value: "Marca A" },
                { text: "Marca B", value: "Marca B" },
                { text: "Marca C", value: "Marca C" },
              ]}
              onFilterChange={handleFilterChange}
              selectedValues={[filters.brands]}
            />
          </div>
        </div>

        <div className="flex-grow p-4">
          <Section
            title={`Total de produtos encontrados: ${products.length}`}
            titleAlign="left"
          >
            <ProductListing products={products} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}

export default ProductListingPage;