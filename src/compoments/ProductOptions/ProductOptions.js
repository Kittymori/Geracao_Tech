// src/components/ProductOptions/ProductOptions.js

import React, { useState } from 'react';

function ProductOptions({ options, radius, shape, type, onSelect }) {
  // Estado para controlar a opção selecionada (opcional, para visualização de borda)
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (optionValue) => {
    setSelectedOption(optionValue);
    if (onSelect) {
      onSelect(optionValue); // Notifica o componente pai sobre a seleção
    }
  };

  return (
    <div className="flex gap-2 mb-4"> {/* flex gap-2 para espaçamento entre as opções, mb-4 para espaçamento inferior */}
      {options.map((option, index) => {
        const value = option.value || option.text || option; // Pega o valor ou texto ou o próprio item
        const isSelected = selectedOption === value;

        // Classes base para o item
        const itemClasses = `
          flex items-center justify-center cursor-pointer transition-all duration-200
          ${isSelected ? 'border-2 border-drip-primary' : 'border border-drip-light-border'}
          ${shape === 'square' ? 'h-[46px] w-auto px-4' : 'w-[31px] h-[31px]'}
          ${shape === 'square' && radius ? `rounded-[${radius}]` : shape === 'circle' ? 'rounded-full' : ''}
        `;

        const content = (
          type === 'color'
            ? <div style={{ backgroundColor: option.text || option }} className={`w-full h-full ${shape === 'circle' ? 'rounded-full' : `rounded-[${radius}]`}`}></div>
            : <span className="text-drip-dark-text text-2xl">{option.text || option}</span> // text-2xl = 24px
        );

        return (
          <div key={index} className={itemClasses} onClick={() => handleSelect(value)}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default ProductOptions;