import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-auto w-full shadow-lg">
      <div className="max-w-4xl mx-auto px-4"> 
        <p className="text-sm mb-2">&copy; {currentYear} Projeto Geração Tech. Todos os direitos reservados.</p>
        <p className="text-sm mb-4">Desenvolvido com ❤️ e React.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;