import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx';
import SortBy from '../../components/SortBy/SortBy.jsx';
import FilterGroup from '../../components/FilterGroup/FilterGroup.jsx';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../pages/ProductListingPage/ProductListingPage.jsx'
import api from '../../services/api.js';

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [allFetchedProducts, setAllFetchedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({ categories: [], brands: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get('/api/products');
        setProducts(response.data);
        setAllFetchedProducts(response.data);
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError('Não foi possível carregar os produtos. Verifique sua conexão ou tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    let filteredAndSortedProducts = [...allFetchedProducts];

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
  }, [sortOrder, filters, allFetchedProducts]);

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

  if (loading) {
    return (
      <Layout>
        <div className="flex-grow p-4 text-center">
          <p>Carregando produtos...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex-grow p-4 text-center text-red-600">
          <p>{error}</p>
        </div>
      </Layout>
    );
  }

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
                { text: "Esportivos", value: "Esportivos" },
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