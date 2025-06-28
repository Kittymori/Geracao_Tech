
import React, { useState, useEffect } from 'react';
import Layout from 'src/compoments/Layout/Layout.jsx';
import SortBy from 'src/compoments/SortBy/SortBy.jsx';
import FilterGroup from 'src/compoments/FilterGroup/FilterGroup.jsx';
import Section from 'src/compoments/Section/Section.jsx';
import ProductListing from 'src/pages/ProdutListingPage/ProductListingPage.jsx';

const allProducts = [
  { id: 'p1', name: "Tênis Vermelho e Preto", image: "public/product-thumb-1.jpeg", price: 250.00, priceDiscount: 199.90, category: 'Tenis', brand: 'Marca A' },
  { id: 'p2', name: "Tênis Vermelho", image: "public/product-thumb-2.jpeg", price: 180.00, category: 'Tenis', brand: 'Marca B' },
  { id: 'p3', name: "Calçado Marrom", image: "public/product-thumb-3.jpeg", price: 350.00, priceDiscount: 280.00, category: 'Calçados', brand: 'Marca A' },
  { id: 'p4', name: "Tênis Verde e Branco", image: "public/product-thumb-4.jpeg", price: 180.00, category: 'Tenis', brand: 'Marca C' },
  { id: 'p5', name: "Tênis Esportiva Verde", image: "public/product-thumb-5.jpeg", price: 450.00, category: 'Esportivos', brand: 'Marca B' },
];

function ProductsPage() {
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
                { text: "Calçados", value: "Calçados" },
                { text: "Esportivos", value: "Esportivos" },
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

export default ProductsDetails;