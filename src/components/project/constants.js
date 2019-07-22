import arfiss from '../../styles/assets/images/ARFISS.jpg';
import asana from '../../styles/assets/images/asana.jpg';
import portfolio from '../../styles/assets/images/portfolio.jpg';
import lyndaMock from '../../styles/assets/images/lynda_mock.jpg';
import calculator from '../../styles/assets/images/calculatorC.jpg';
import princess from '../../styles/assets/images/princess.jpg';
import chat from '../../styles/assets/images/chat.jpg';
import armRobot from '../../styles/assets/images/arm-robot.jpg';

const imgUrls = [
  {
    pictureUrl: `${portfolio}`,
    projectName: 'Portfolio',
    description: `Julie Hutchinson's personal portfolio site`,
    technologies: 'React, React Router DOM, Sass, Jest, Enzyme',
    gitHub:
      'https://github.com/juliehutchinson001/juliehutchinson001.github.io',
    backgroundColor: '#3AA9BC',
  },
  {
    pictureUrl: `${lyndaMock}`,
    projectName: 'Lynda Mock',
    description:
      'This is the frontend code of a mock of Lynda Learning website.',
    technologies: 'React, Sass, Jest, Enzyme, Node, Express',
    gitHub: 'https://github.com/juliehutchinson001/lynda_search_course_mock',
    backgroundColor: '#98ABDF',
  },
  {
    pictureUrl: `${chat}`,
    projectName: 'Chat Room App',
    description:
      'This is a backend app that implements the functionality of a chatroom app featuring private rooms.',
    technologies:
      'Javascript, Node, Express, Jest, Bootstrap, HTML, socket.io.',
    gitHub: 'https://github.com/juliehutchinson001/sockets',
    live: 'https://julie-socketio.herokuapp.com/',
    backgroundColor: '#437EB4',
  },
  {
    pictureUrl: `${asana}`,
    projectName: 'Asana Task Manager',
    description:
      "This is a new feature for Asana's users that allows them to hide, delete, update, create and show all tasks they have in their personal accounts from Asana.",
    technologies: 'Javascript, Sass, BEM, HTML, CRUD.',
    gitHub:
      'https://github.com/juliehutchinson001/javascript_practice/tree/master/API/asana_take_home_Julie_Hutchinson',
    backgroundColor: '#BC8894',
  },
  {
    pictureUrl: `${princess}`,
    projectName: 'Princess Trading Card',
    description: 'This is a trading card of my favorite animal.',
    technologies: 'HTML, CSS.',
    gitHub:
      'https://github.com/juliehutchinson001/udacity_google_scholarship/tree/master/fend-animal-trading-cards-master',
    live: 'https://codepen.io/juliethGomez001/pen/WLzBZO',
    backgroundColor: '#D7FCEF',
  },
  {
    pictureUrl:
      'https://github.com/juliehutchinson001/blogz/raw/master/blogz_main1.png',
    projectName: 'Blogz',
    description:
      'Blog site that features password hashing, username verification, signup, logging in/out',
    technologies: 'HTML, CSS, Python/Flask MYSQL.',
    gitHub: 'https://github.com/juliehutchinson001/blogz',
    backgroundColor: '#B62E23',
  },
  {
    pictureUrl: 'https://cdn.filestackcontent.com/lHqCTTiZQDOuaLO1fWDW',
    projectName: 'Tweet Generator',
    description:
      "Program pythonic data structures to generate a sentence of Arthur Conan Doyle's, The Adventures of Sherlock Holmes. Develop an nth markov chain to collect semi-random words out of a corpus to generate an approximation of a grammatically correct sentence.",
    technologies:
      'Python, Flask, Data Structures, Jinja2 Templating, Command Line.',
    gitHub: 'https://github.com/juliehutchinson001/Tweet-Generator',
    backgroundColor: '#A3B1B2',
  },
  {
    pictureUrl: `${armRobot}`,
    projectName: 'Autonomous Arm Robot Palletizer',
    description:
      'The robotic arm stacker sorts objects of different colors by grabbing an object by color through the Pixy camera. The position where the robot picks up the object is based on coordinates given by the cam to the ARDUINO. In this model the robot is picking up objects from a pile. The objects are set on what is simulated as colored – pallets and stacked one over another with specific wide and height dimensions.',
    technologies: 'C, Arduino, C++.',
    gitHub: 'gitHubLink',
    live: 'https://youtu.be/DThDWMg8_P4',
    backgroundColor: '#ED6F85',
  },
  {
    pictureUrl: `${arfiss}`,
    projectName: 'A.R.F.I.S.S',
    description:
      'Autonomous Robot Follower, and Security Surveillance is an automated, follower and surveillance robot built to monitor and follow a designated person as entertainment or safety. It is able to observe its surroundings and analyze if an object is out of order or the person/animal might run into an obstacle. A CMUcam5 Pixy or kinect sensor is used to follow a person, a pet, etc. The robot keeps a range between 3ft - 6ft of distance away from the target, while being able to transmit live video with a PlayStation3 Eye Camera through the Raspberry PI2. In addition, the robot displays the temperature and other data in an attached tft LCD Display thanks to a sensor.',
    technologies: 'C, Arduino, MATLAB.',
    live: 'https://youtu.be/3xIwfpzAFaA',
    backgroundColor: '#D7FCEF',
  },
  {
    pictureUrl: `${calculator}`,
    projectName: 'Scientific Calculator',
    description: 'Scientific calculator functionality.',
    technologies: 'C, VIM, Command Line.',
    gitHub:
      'https://github.com/juliehutchinson001/C_For_Engineers/blob/master/Scientific_Calculator.c',
    backgroundColor: '#8ADCFF',
  },
];

export default imgUrls;
