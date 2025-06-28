import React from 'react';

function SortBy({ onSortChange }) {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="sort-order" className="text-drip-dark-text text-base mb-2">
        Ordenar por
      </label>

      <select
        id="sort-order"
        onChange={handleChange}
        className="w-[308px] h-[60px] border border-drip-border rounded-md px-4 py-2 text-drip-dark-text bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-drip-primary"
      >
        <option value="">Selecione a ordem</option>
        <option value="lowest_price">Menor preço</option>
        <option value="highest_price">Maior preço</option>
      </select>
    </div>
  );
}

export default SortBy;