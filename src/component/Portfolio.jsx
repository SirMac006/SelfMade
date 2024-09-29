import React from 'react';
import Project from './Project'; 

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <Project 
        title="Semantic Code" 
        imgSrc="./assets/images/skills.jpg" 
        link="https://sirmac006.github.io/Mac_Semantic_Code/" 
      />
      <Project 
        title="Cinema Select" 
        imgSrc="./assets/images/placeholder_template.jpg" 
        link="https://example.com/project1" // Add a link here
      />
      <Project 
        title="GameCenter" 
        imgSrc="./assets/images/placeholder_template.jpg" 
        link="https://example.com/project2" // Add a link here
      />
        <Project 
        title="Placeholder Project 2" 
        imgSrc="./assets/images/placeholder_template.jpg" 
        link="https://example.com/project2" // Add a link here
      />
    </section>
  );
};

export default Portfolio;
