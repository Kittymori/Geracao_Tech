import React from 'react';
import LogoHeader from 'assets\logo-header.svg';

function Logo() {
  return (
    <img
      src={LogoHeader}
      alt="DRIP STORE Logo"
      style={{ width: '253px', height: '44px' }}
      className="app-logo" // Adicione uma classe para estilização adicional via CSS
    />
  );
}

export default Logo;