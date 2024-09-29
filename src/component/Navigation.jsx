import React from 'react';

const Navigation = ({ currentSection, handleSectionChange }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={currentSection === section ? 'active' : ''}
            onClick={() => handleSectionChange(section)}
            style={{ cursor: 'pointer' }}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
