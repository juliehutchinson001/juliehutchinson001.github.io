import React from 'react';
import skills from './constants';

const Skills = () => {
  const allSkills = skills.map(skillInfo => {
    const { section, description } = skillInfo;
    return (
      <li key={`${description}`} className="bio-skill" data-test-bio-skill>
        <h3 className="bio-skill__header">{section}</h3>
        <p className="bio-skill__content">{description}</p>
      </li>
    );
  });
  return (
    <section className="bio__secondary--info" data-test-bio-secondary-info>
      <h2 className="bio__subheader" data-test-bio-subheader>
        Skills
      </h2>
      <ul className="bio__list-of-skills" data-test-bio-list-of-skills>
        {allSkills}
      </ul>
    </section>
  );
};

const BioContainer = () => (
  <main className="bio__main-container" data-test-bio-container>
    <section className="bio__intro-container" data-test-bio-intro-container>
      <h1 className="bio__header" data-test-bio-header>
        About Julie...
      </h1>
      <p className="bio__first--paragraph" data-test-bio-first-paragraph>
        I am a frontend engineer originally from Florida that relocated to
        California following one of my dreams of becoming a UI engineer for a
        tech company. My passion for UI became evident when I understood the
        infinite possibilities the JavaScript ecosystem offers in the browser
        and &#x2019;behind the curtains&#x2019; when developing a visually
        appealling and performant site. I enjoy building from scratch accessible
        and good-looking website the public can use and appreciate.
      </p>
      <p className="bio__second--paragraph" data-test-bio-second-paragraph>
        My greatest interests from the moment I relocated to the Bay area are
        focused on keeping up with best practices of everything the User
        Interface entails; for example, an accessible site that makes use of
        semantic HTML and CSS. In my free time, I constantly do research of
        anything relating UI, and challenge my coding practices by duplicating
        websites to improve my skillset.
      </p>
      <p className="bio__third--paragraph" data-test-bio-third-paragraph>
        I finished my Bachelors in Science in 2017, where I experienced how much
        fun coding can be, and built a number of projects with a programming
        focus including my thesis. After finishing my studies, my work
        emphazises in both the frontend side of a site and sometimes the backend
        as well when working with NodeJs.
      </p>
    </section>
    <Skills />
  </main>
);

export default BioContainer;
