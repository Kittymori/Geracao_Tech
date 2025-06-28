import React from 'react';

function FilterGroup({ title, inputType, options, onFilterChange, selectedValues = [] }) {

  const handleInputChange = (event) => {
    const { value, checked } = event.target;
    if (onFilterChange) {
      onFilterChange(value, checked, inputType);
    }
  };

  return (
    <div className="mb-6">
      <h4 className="text-drip-dark-text text-sm font-semibold mb-2">
        {title}
      </h4>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center cursor-pointer text-drip-dark-text text-base">
            <input
              type={inputType}
              name={title}
              value={option.value || option.text}
              onChange={handleInputChange}
                className={`
                mr-2 w-[22px] h-[22px] appearance-none
                ${inputType === 'radio' ? 'rounded-full' : 'rounded-md'}
                border-2 border-drip-primary
                checked:bg-drip-primary checked:border-transparent
                focus:outline-none focus:ring-2 focus:ring-drip-primary focus:ring-offset-2
              `}
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;
