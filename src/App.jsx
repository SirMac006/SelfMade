import React, { useState } from 'react';
import Header from './component/Header';
import AboutMe from './component/AboutMe';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Resume from './component/Resume';
import Footer from './component/Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const sections = {
    'About Me': <AboutMe />,
    'Portfolio': <Portfolio />,
    'Contact': <Contact />,
    'Resume': <Resume />,
  };


  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };


  const renderSection = () => sections[currentSection] || sections['About Me'];

  return (
    <div>
      <Header currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default App;
