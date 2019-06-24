import React from 'react';

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
