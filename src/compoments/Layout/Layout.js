import React from 'react';
import Header from 'src/compoments/Header/Header.js';
import Footer from 'src/compoments/Footer/Footer.js';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;