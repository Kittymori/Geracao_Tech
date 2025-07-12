import React from 'react';
import { Link } from 'react-router-dom';

function AuthLinks() {
  return (
    <div className="flex items-center gap-5">
      <Link to="/register" className="text-base text-drip-dark-text underline decoration-drip-dark-text hover:no-underline">
        Cadastre-se
      </Link>
      <Link
        to="/login"
        className="bg-drip-primary text-white no-underline font-bold text-sm w-[114px] h-10 rounded-md flex items-center justify-center transition-colors duration-300 hover:bg-drip-hover-primary"
      >
        Entrar
      </Link>
    </div>
  );
}

export default AuthLinks;