import arfiss from '../../styles/assets/images/ARFISS.jpg';
import asana from '../../styles/assets/images/asana.jpg';
import portfolio from '../../styles/assets/images/portfolio.jpg';
import lyndaMock from '../../styles/assets/images/lynda_mock.jpg';
import calculator from '../../styles/assets/images/calculatorC.jpg';
import princess from '../../styles/assets/images/princess.jpg';
import chat from '../../styles/assets/images/chat.jpg';
import armRobot from '../../styles/assets/images/arm-robot.jpg';

const projectsDB = [
  {
    pictureUrl: `${portfolio}`,
    projectName: 'Portfolio',
    description: `Julie Hutchinson's personal portfolio site`,
    technologies: 'React, React Router DOM, Sass, Jest, Enzyme',
    gitHub:
      'https://github.com/juliehutchinson001/juliehutchinson001.github.io',
    live: 'http://localhost:3000/projects',
    backgroundColor: '#84CEC7',
  },
  {
    pictureUrl: `${lyndaMock}`,
    projectName: 'Lynda Mock',
    description:
      'A frontend view of a mock of Lynda Learning website. It features some of the user interactions that a person can use when creating a custom playlist to study and additioning new videos to a playlist.',
    technologies: 'React, Sass, Jest, Enzyme, Node, Express',
    gitHub: 'https://github.com/juliehutchinson001/lynda_search_course_mock',
    backgroundColor: '#4780B1',
  },
  {
    pictureUrl: `${chat}`,
    projectName: 'Chat Room App',
    description:
      'Backend app that implements the functionality of a chatroom app featuring private rooms.',
    technologies:
      'Javascript, Node, Express, Jest, Bootstrap, HTML, socket.io.',
    gitHub: 'https://github.com/juliehutchinson001/sockets',
    live: 'https://julie-socketio.herokuapp.com/',
    backgroundColor: '#386580',
  },
  {
    pictureUrl: `${asana}`,
    projectName: 'Asana Task Manager',
    description:
      "This is a new feature for Asana's users that allows them to hide, delete, update, create and show all tasks they have in their personal accounts from Asana.",
    technologies: 'Javascript, Sass, BEM, HTML, CRUD.',
    gitHub:
      'https://github.com/juliehutchinson001/javascript_practice/tree/master/API/asana_take_home_Julie_Hutchinson',
    backgroundColor: '#E86375',
  },
  {
    pictureUrl: `${princess}`,
    projectName: 'Animal Trading Card',
    description: 'This is a trading card of my favorite animal.',
    technologies: 'HTML, CSS.',
    gitHub:
      'https://github.com/juliehutchinson001/udacity_google_scholarship/tree/master/fend-animal-trading-cards-master',
    live: 'https://codepen.io/juliethGomez001/pen/WLzBZO',
    backgroundColor: '#F0965F',
  },
  {
    pictureUrl:
      'https://github.com/juliehutchinson001/blogz/raw/master/blogz_main1.png',
    projectName: 'Blogz',
    description:
      'Blog site that features password hashing, username verification, signup, logging in/out',
    technologies: 'HTML, CSS, Python/Flask MYSQL.',
    gitHub: 'https://github.com/juliehutchinson001/blogz',
    backgroundColor: '#97CBD3',
  },
  {
    pictureUrl: 'https://cdn.filestackcontent.com/lHqCTTiZQDOuaLO1fWDW',
    projectName: 'Sherlock Holmes Sentence Generator',
    description: `This is a command line program that uses pythonic data structures to generate sentences of Sir Arthur Conan Doyle's stories, The Adventures of Sherlock Holmes. With the development of an nth-markov chain, random words are taken out of a text corpus to generate an approximation of a grammatically correct quote.`,
    technologies:
      'Python, Flask, Data Structures, Jinja2 Templating, Command Line.',
    gitHub: 'https://github.com/juliehutchinson001/Tweet-Generator',
    backgroundColor: '#D7A166',
  },
  {
    pictureUrl: `${armRobot}`,
    projectName: 'Autonomous Arm Robot Palletizer',
    description:
      'The robotic arm stacker sorts objects of different colors by grabbing an object by color through the Pixy camera. The position where the robot picks up the object is based on coordinates given by the cam to the Arduino. In this model, the robot is picking up objects from a pile. The objects are set on what is simulated as colored – pallets and stacked one over another with specific wide and height dimensions.',
    technologies: 'C, Arduino, C++.',
    live: 'https://youtu.be/DThDWMg8_P4',
    backgroundColor: '#826599',
  },
  {
    pictureUrl: `${arfiss}`,
    projectName: 'Autonomous Robot Follower',
    description:
      'Autonomous Robot Follower, and Safety Surveillancer is an automated, follower and surveillance robot built to monitor and follow a designated person as entertainment or safety. It is able to observe its surroundings and analyze if an object is out of order or the person/animal might run into an obstacle. A CMUcam5 Pixy or kinect sensor is used to follow a person, a pet, etc. The robot keeps a range between 3ft - 6ft of distance away from the target, while being able to transmit live video with a PlayStation3 Eye Camera through the Raspberry PI2. In addition, the robot displays the temperature and other data in an attached tft LCD Display thanks to a sensor.',
    technologies: 'C, Arduino, MATLAB.',
    live: 'https://youtu.be/3xIwfpzAFaA',
    backgroundColor: '#96AF78',
  },
  {
    pictureUrl: `${calculator}`,
    projectName: 'Scientific Calculator',
    description:
      'Command line application that simulates a scientific calculator functionality.',
    technologies: 'C, VIM, Command Line.',
    gitHub:
      'https://github.com/juliehutchinson001/C_For_Engineers/blob/master/Scientific_Calculator.c',
    backgroundColor: '#5E7296',
  },
];

export default projectsDB;
