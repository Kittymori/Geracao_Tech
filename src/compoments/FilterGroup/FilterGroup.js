import React from 'react';

function FilterGroup({ title, inputType, options, onFilterChange, selectedValues = [] }) {
  // onFilterChange: função a ser chamada quando um filtro é alterado
  // selectedValues: array de valores atualmente selecionados (útil para tornar os inputs controlados)

  const handleInputChange = (event) => {
    const { value, checked } = event.target;
    // Chama a função de manipulação de filtro do componente pai
    if (onFilterChange) {
      onFilterChange(value, checked, inputType);
    }
  };

  return (
    // Container para cada grupo de filtro (e.g., "Por Categoria")
    // mb-6: margin-bottom de 24px para espaçar os grupos de filtro
    <div className="mb-6">
      {/* Título do grupo de filtro */}
      {/* text-drip-dark-text: cor mapeada de dark-gray-2 (#474747)
          text-sm: font-size de 14px
          font-semibold: negrito leve
          mb-2: margin-bottom de 8px */}
      <h4 className="text-drip-dark-text text-sm font-semibold mb-2">
        {title}
      </h4>

      {/* Container para os inputs de filtro */}
      {/* flex flex-col: empilha os inputs verticalmente
          gap-2: espaçamento de 8px entre os inputs */}
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          // Label para cada input (torna o texto clicável para marcar/desmarcar o input)
          // flex items-center: alinha o input e o texto na mesma linha, centralizados
          // cursor-pointer: cursor de ponteiro no hover
          // text-drip-dark-text: cor do texto da label
          // text-base: font-size de 16px para a label
          <label key={index} className="flex items-center cursor-pointer text-drip-dark-text text-base">
            <input
              type={inputType}
              name={title} // Atributo 'name' para agrupar radio buttons
              value={option.value || option.text} // Usa 'value' se existir, senão 'text'
              onChange={handleInputChange}
              // Exemplo de como controlar o estado do input se você gerenciar 'selectedValues' no pai:
              // checked={selectedValues.includes(option.value || option.text)}
              
              // Estilos para os inputs (checkbox/radio)
              // mr-2: margin-right de 8px para separar do texto da label
              // w-[22px] h-[22px]: largura e altura de 22px
              // appearance-none: remove o estilo padrão do navegador para o input
              // rounded-md (para checkbox) / rounded-full (para radio): arredondamento da borda
              // border-2 border-drip-primary: borda de 2px com cor primary (#C92071)
              // checked:bg-drip-primary: fundo primary quando o input está checado
              // checked:border-transparent: remove a borda quando checado (para que o primary preencha tudo)
              // focus:outline-none focus:ring-2 focus:ring-drip-primary focus:ring-offset-2: estilos de foco para acessibilidade
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
