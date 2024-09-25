import React from 'react';

const Project = ({ title, appLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  );
};

export default Project;
