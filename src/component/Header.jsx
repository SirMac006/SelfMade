import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentSection, handleSectionChange }) => {
  return (
    <header>
      <div className="container">
        <nav>
          <img src="src\assets\images\images\MOAT.jpg" id="logo" alt="Logo" />
          <h3>MAC of All Trades</h3>
          <Navigation currentSection={currentSection} handleSectionChange={handleSectionChange} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
