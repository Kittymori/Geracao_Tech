import React from 'react';
import Header from 'src/compoments/Header/Header.jsx';
import Footer from 'src/compoments/Footer/Footer.jsx';

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