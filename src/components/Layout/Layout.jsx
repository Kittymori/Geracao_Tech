import React from 'react';
import Header from '../../compoments/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

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