import React from 'react';
// import PropTypes from 'prop-types';

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
      her free time she designs code snippets to test her UI abilities and
      expand them.`}
      </p>
      <p className="bio__third--paragraph" data-test-bio-third-paragraph>
        She graduated as a BS Electronics Engineer where she discovered her
        passion for programming by building an autonomous robot and programming
        it to follow a person based on an specific color being held by the
        person to follow; as well as, programming a robotic arm for her thesis.
      </p>
    </section>
    <section className="bio__secondary--info" data-test-bio-secondary-info>
      <h2 className="bio__subheader" data-test-bio-subheader>
        Skills
      </h2>
      <ul className="bio__list-of-skills" data-test-bio-list-of-skills>
        <li className="bio-skill" data-test-bio-skill>
          React, JavaScript, DOM, HTML5, React router, ES6-ES9, Redux, AJAX,
          jQuery.
        </li>
        <li className="bio-skill" data-test-bio-skill>
          MongoDB (Mongoose), Node.js, Express.js, RESTful Routes.
        </li>
        <li className="bio-skill" data-test-bio-skill>
          Jest, Enzyme, TDD.
        </li>
        <li className="bio-skill" data-test-bio-skill>
          OOP Fundamentals, Data Structures, Algorithms, Markov Chain.
        </li>
        <li className="bio-skill" data-test-bio-skill>
          CSS3, Sass, Semantic UI, CSS in JS (Aphrodite), Bootstrap.
        </li>
        <li className="bio-skill" data-test-bio-skill>
          Git/GitHub collaboration, Unix/Linux Command Line.
        </li>
        <li className="bio-skill" data-test-bio-skill>
          Python, Jinja Templating, Flask, C.
        </li>
      </ul>
    </section>
  </main>
);

export default BioContainer;
