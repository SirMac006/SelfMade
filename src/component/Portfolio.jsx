import React from 'react';
import Project from './project';

const projects = [
  { title: 'Project 1', appLink: 'url1', repoLink: 'github_url1' },
  { title: 'Project 2', appLink: 'url2', repoLink: 'github_url2' },
  // add 4 more projects
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <Project key={index} title={project.title} appLink={project.appLink} repoLink={project.repoLink} />
      ))}
    </section>
  );
};

export default Portfolio;
