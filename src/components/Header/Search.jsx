import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from 'assets/Search.png';

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
    <div className="flex items-center border border-drip-light-border rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-grow outline-none border-none py-2 px-3"
      />
      <button onClick={handleSearch} className="bg-transparent border-none p-2 cursor-pointer flex items-center justify-center">
        <img src={SearchIcon} alt="Buscar" className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Search;