import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <img 
          className="about-me-image" 
          src="src\assets\images\images\mugshot.png" 
          alt="Matthew Holmes"
        />
        <div className="about-me-text">
          <h1>About Me</h1>
          <p>
            Hi, I'm Matthew "Mac" Holmes, a Full Stack Web Developer based in Phoenix, AZ.
            I have a passion for coding and building web applications that provide a seamless user experience.
            Currently, I am completing my full stack web development certification from Arizona State University.
          </p>
          <p>
            I enjoy working with JavaScript, React, and modern web technologies. 
            I am constantly looking to improve my skills and take on challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

