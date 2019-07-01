import React from 'react';
import skills from '../helpers/skills-info';

const Skills = () => {
  return (
    <section className="bio__secondary--info" data-test-bio-secondary-info>
      <h2 className="bio__subheader" data-test-bio-subheader>
        Skills
      </h2>
      <ul className="bio__list-of-skills" data-test-bio-list-of-skills>
        <li className="bio-skill" data-test-bio-skill>
          <h3 className="bio-skill__header">Frontend</h3>
          <p className="bio-skill__content">
            React, JavaScript, DOM, HTML5, React router, ES6-ES9, Redux, AJAX,
            jQuery.
          </p>
        </li>
        <li className="bio-skill" data-test-bio-skill>
          <h3 className="bio-skill__header">CSS & Design</h3>
          <p className="bio-skill__content">
            CSS3, Sass, BEM, Semantic UI, CSS in JS (Aphrodite), Bootstrap.
          </p>
        </li>
        <li className="bio-skill" data-test-bio-skill>
          <h3 className="bio-skill__header">Testing</h3>
          <p className="bio-skill__content">Jest, Enzyme, TDD.</p>
        </li>
        <li className="bio-skill" data-test-bio-skill>
          <h3 className="bio-skill__header">CS</h3>
          <p className="bio-skill__content">
            OOP Fundamentals, Data Structures, Algorithms, Markov Chain.
          </p>
        </li>

        <li className="bio-skill" data-test-bio-skill>
          <h3 className="bio-skill__header terminal">Version Control / Unix</h3>
          <p className="bio-skill__content">
            Git/GitHub collaboration, Unix/Linux Command Line.
          </p>
        </li>
        <li className="bio-skill" data-test-bio-skill>
          <h3 className="bio-skill__header">Backend</h3>
          <p className="bio-skill__content">
            MongoDB (Mongoose), Node.js, Express.js, RESTful Routes.
          </p>
        </li>
        <li className="bio-skill" data-test-bio-skill>
          <h3 className="bio-skill__header">Others</h3>
          <p className="bio-skill__content">
            Python3, Jinja Templating, Flask, C.
          </p>
        </li>
      </ul>
    </section>
  );
};

const BioContainer = () => (
  <main className="bio__main-container" data-test-bio-container>
    <section className="bio__intro-container" data-test-bio-intro-container>
      <h1 className="bio__header" data-test-bio-header>
        Welcome to another portfolio blah
      </h1>
      <p className="bio__first--paragraph" data-test-bio-first-paragraph>
        Julie is a frontend engineer originally from Florida that relocated to
        California following her dream of becoming a UI engineer for a tech
        company.
      </p>
      <p className="bio__second--paragraph" data-test-bio-second-paragraph>
        {`Julie's greatest interests from the moment she relocated are
      focused on semantic application of UI and proper layout of websites. In
      her free time she designs code snippets to test her UI skillset and
      expand them.`}
      </p>
      <p className="bio__third--paragraph" data-test-bio-third-paragraph>
        Julie graduated from her BS in Electronics Engineering, where she
        discovered her passion by building a number of projects with a
        programming focus including her thesis.
      </p>
    </section>
    <Skills />
  </main>
);

export default BioContainer;
