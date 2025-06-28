// src/components/Footer/Footer.js

import React from 'react';
import FacebookIcon from 'assets/facebook.svg';
import InstagramIcon from 'assets/instagram.svg';
import TwitterIcon from 'assets/twitter.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-auto w-full shadow-lg">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm mb-2">&copy; {currentYear} Projeto Geração Tech. Todos os direitos reservados.</p>
        <p className="text-sm mb-4">Desenvolvido em React.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <img src={TwitterIcon} alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;