import React from 'react';
import LogoHeader from 'src/assets/logo-header.svg';

function Logo() {
  return (
    <img
      src={LogoHeader}
      alt="DRIP STORE Logo"
      style={{ width: '253px', height: '44px' }}
    />
  );
}

export default Logo;