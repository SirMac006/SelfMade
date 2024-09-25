import React, { useState } from 'react';
import Header from './component/header';
import AboutMe from './component/AboutMe';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Resume from './component/Resume';
import Footer from './component/footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const renderSection = () => {
    switch (currentSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header currentSection={currentSection} handleSectionChange={setCurrentSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default App;
