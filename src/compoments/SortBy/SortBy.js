import React from 'react';

function SortBy({ onSortChange }) {
  const handleChange = (event) => {
    // onSortChange será uma função passada do componente pai
    // Ela receberá o valor selecionado ('lowest_price' ou 'highest_price')
    onSortChange(event.target.value);
  };

  return (
    // Container principal para a label e o select
    // flex flex-col: para empilhar a label e o select verticalmente
    <div className="flex flex-col mb-4"> {/* Adicionei mb-4 para espaçamento inferior */}
      {/* Label para o campo de seleção */}
      {/* text-drip-dark-text: cor personalizada mapeada de dark-gray-2 (#474747)
          text-base: font-size de 16px
          mb-2: margin-bottom de 8px para separar da caixa de seleção */}
      <label htmlFor="sort-order" className="text-drip-dark-text text-base mb-2">
        Ordenar por
      </label>

      {/* Campo de seleção (Select) */}
      {/* w-[308px]: largura de 308px
          h-[60px]: altura de 60px
          border border-drip-border: borda padrão
          rounded-md: border-radius de 4px
          px-4 py-2: padding horizontal e vertical
          text-drip-dark-text: cor do texto
          bg-white: fundo branco
          appearance-none: remove estilos padrão do navegador para o select
          cursor-pointer: indica que é clicável
          focus:outline-none focus:ring-2 focus:ring-drip-primary: estilos de foco para acessibilidade */}
      <select
        id="sort-order"
        onChange={handleChange}
        className="w-[308px] h-[60px] border border-drip-border rounded-md px-4 py-2 text-drip-dark-text bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-drip-primary"
      >
        <option value="">Selecione a ordem</option> {/* Opção padrão */}
        <option value="lowest_price">Menor preço</option>
        <option value="highest_price">Maior preço</option>
      </select>
    </div>
  );
}

export default SortBy;