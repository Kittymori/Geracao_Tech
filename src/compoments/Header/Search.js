import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../../assets/Search.png'; // Caminho corrigido para a imagem do ícone

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    // Equivalent of .search-bar-container
    <div className="flex items-center border border-drip-light-border rounded-md overflow-hidden">
      {/* Equivalent of .search-input */}
      {/* flex-grow: flex-grow: 1;
          outline-none: remove a borda de foco
          border-none: remove a borda do input
          py-2: padding vertical (8px)
          px-3: padding horizontal (12px) */}
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-grow outline-none border-none py-2 px-3"
      />
      {/* Equivalent of .search-button */}
      {/* bg-transparent: background-color: transparent;
          border-none: remove a borda do botão
          p-2: padding (8px)
          cursor-pointer: cursor: pointer;
          flex: display: flex;
          items-center: align-items: center;
          justify-center: justify-content: center; */}
      <button onClick={handleSearch} className="bg-transparent border-none p-2 cursor-pointer flex items-center justify-center">
        {/* Equivalent of .search-icon */}
        {/* w-5: width: 20px;
            h-5: height: 20px; */}
        <img src={SearchIcon} alt="Buscar" className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Search;