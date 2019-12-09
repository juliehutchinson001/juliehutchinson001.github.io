import arfiss from '../../styles/assets/images/ARFISS.jpg';
import asana from '../../styles/assets/images/asana.jpg';
import convertlyThemes from '../../styles/assets/images/shrubnub-home.png';
import portfolio from '../../styles/assets/images/portfolio.jpg';
import lyndaMock from '../../styles/assets/images/lynda_mock.jpg';
import calculator from '../../styles/assets/images/calculatorC.jpg';
import princess from '../../styles/assets/images/princess.jpg';
import chat from '../../styles/assets/images/chat.jpg';
import armRobot from '../../styles/assets/images/arm-robot.jpg';

const projectsDB = [
  {
    pictureUrl: `${convertlyThemes}`,
    projectName: 'Template Themes',
    description: `One of my tasks as a Frontend Engineer in Convertly was to implement over 44 themes that are used internally when building sites for our clients. The implementation of the components and style was done in React, Redux and CSS in Js. The live demos of some of my favorite templates I re-implemented are:`,
    technologies: 'React, Redux, CSS in JS, Javascript',
    links: [
      { name: 'Shrubnub2 live site', link: 'https://shrubnub2.convertly.io' },
      {
        name: 'Mintleaf live site',
        link: 'https://mintleaf.convertly-themes.com',
      },
      {
        name: 'Grandvine live site',
        link: 'https://grandvine.convertly-themes.com',
      },
      {
        name: 'Streetbuggytheme1 live site',
        link: 'https://streetbuggytheme1.convertly.io',
      },
      { name: 'Adventure live site', link: 'https://adventure.convertly.io' },
    ],
    backgroundColor: '#D0F1FD',
  },
  {
    pictureUrl: `${portfolio}`,
    projectName: 'Portfolio',
    description: `Julie Hutchinson's personal portfolio site. I built this site as a personal signature of my coding style. I like following semantic HTML, apply testing to the components rendered and choose my colors to make a piece of text, and everything a user can see, more readable and 'clean'.`,
    technologies: 'React, React Router DOM, Sass, Jest, Enzyme',
    links: [
      {
        name: 'Portfolio live site',
        link: 'https://juliehutchinson001.github.io',
      },
      {
        name: 'Portfolio code',
        link:
          'https://github.com/juliehutchinson001/juliehutchinson001.github.io/tree/complete-remodel/src',
      },
    ],
    backgroundColor: '#84CEC7',
  },
  {
    pictureUrl: `${asana}`,
    projectName: 'Asana Task Manager',
    description:
      "This is a mock Asana's task management system that allows me to hide, delete, update, create and show all tasks I have in my account from Asana. I am able to manipulate the tasks created by making calls to the API.",
    technologies: 'Javascript, Sass, BEM, HTML, CRUD.',
    links: [
      {
        name: 'Asana task manager code',
        link:
          'https://github.com/juliehutchinson001/online-task-manager/blob/master/js/index.js',
      },
      {
        name: 'Asana task manager live site',
        link: 'https://juliehutchinson001.github.io/online-task-manager/',
      },
    ],
    backgroundColor: '#E86375',
  },
  {
    pictureUrl: `${chat}`,
    projectName: 'Chat Room App',
    description:
      'Backend app that implements the functionality of a chatroom app featuring private rooms, sign-in and sign-out notifications to its online members, and communication/location sharing between members of the same chat-room.',
    technologies:
      'Javascript, Node, Express, Jest, Bootstrap, HTML, socket.io.',
    links: [
      {
        name: 'Chat room app code',
        link: 'https://github.com/juliehutchinson001/sockets',
      },
      {
        name: 'Chat room app live site',
        link: 'https://julie-socketio.herokuapp.com/',
      },
    ],
    backgroundColor: '#386580',
  },
  {
    pictureUrl: `${lyndaMock}`,
    projectName: 'Lynda Mock',
    description:
      'A frontend view of a mock of Lynda Learning website. It features some of the user interactions that a person can use when creating a custom playlist to study and additioning new videos to a playlist.',
    technologies: 'React, Sass, Jest, Enzyme, Node, Express',
    links: [
      {
        name: 'Lynda mock code',
        link: 'https://github.com/juliehutchinson001/lynda_search_course_mock',
      },
    ],
    backgroundColor: '#4780B1',
  },
  {
    pictureUrl: `${princess}`,
    projectName: 'Animal Trading Card',
    description:
      'This is a trading card of my favorite animal. This is one of my firsts frontend code snippet that I applied when I was still learning about CSS3 and HTML5. I wanted to utilize what CSS had to offer at that time, including the use of variables and other features as well',
    technologies: 'HTML, CSS.',
    links: [
      {
        name: 'Animal trading card',
        link: 'https://codepen.io/juliethGomez001/pen/WLzBZO',
      },
    ],
    backgroundColor: '#F0965F',
  },
  {
    pictureUrl:
      'https://github.com/juliehutchinson001/blogz/raw/master/blogz_main1.png',
    projectName: 'Blogz',
    description:
      'Blog site that features password hashing, username verification, signup, logging in/out',
    technologies: 'HTML, CSS, Python/Flask MYSQL.',
    links: [
      {
        name: 'Blogz code',
        link: 'https://github.com/juliehutchinson001/blogz',
      },
    ],
    backgroundColor: '#97CBD3',
  },
  {
    pictureUrl: 'https://cdn.filestackcontent.com/lHqCTTiZQDOuaLO1fWDW',
    projectName: 'Sherlock Holmes Sentence Generator',
    description: `This is a command line program that uses pythonic data structures to generate sentences of Sir Arthur Conan Doyle's stories, The Adventures of Sherlock Holmes. With the development of an nth-markov chain, random words are taken out of a text corpus to generate an approximation of a grammatically correct quote.`,
    technologies:
      'Python, Flask, Data Structures, Jinja2 Templating, Command Line.',
    links: [
      {
        name: 'Random sentence generator code',
        link: 'https://github.com/juliehutchinson001/Tweet-Generator',
      },
    ],
    backgroundColor: '#D7A166',
  },
  {
    pictureUrl: `${armRobot}`,
    projectName: 'Autonomous Arm Robot Palletizer',
    description:
      'The robotic arm stacker sorts objects of different colors by grabbing an object by color through the Pixy camera. The position where the robot picks up the object is based on coordinates given by the cam to the Arduino. In this model, the robot is picking up objects from a pile. The objects are set on what is simulated as colored – pallets and stacked one over another with specific wide and height dimensions.',
    technologies: 'C, Arduino, C++.',
    links: [{ name: 'Arm robot video', link: 'https://youtu.be/DThDWMg8_P4' }],
    backgroundColor: '#826599',
  },
  {
    pictureUrl: `${arfiss}`,
    projectName: 'Autonomous Robot Follower',
    description:
      'Autonomous Robot Follower, and Safety Surveillancer is an automated, follower and surveillance robot built to monitor and follow a designated person as entertainment or safety. It is able to observe its surroundings and analyze if an object is out of order or the person/animal might run into an obstacle. A CMUcam5 Pixy or kinect sensor is used to follow a person, a pet, etc. The robot keeps a range between 3ft - 6ft of distance away from the target, while being able to transmit live video with a PlayStation3 Eye Camera through the Raspberry PI2. In addition, the robot displays the temperature and other data in an attached tft LCD Display thanks to a sensor.',
    technologies: 'C, Arduino, MATLAB.',
    links: [{ name: 'ARFISS video', link: 'https://youtu.be/3xIwfpzAFaA' }],
    backgroundColor: '#96AF78',
  },
  {
    pictureUrl: `${calculator}`,
    projectName: 'Scientific Calculator',
    description:
      'Command line application that simulates a scientific calculator functionality.',
    technologies: 'C, VIM, Command Line.',
    links: [
      {
        name: 'Calculator code',
        link:
          'https://github.com/juliehutchinson001/C_For_Engineers/blob/master/Scientific_Calculator.c',
      },
    ],
    backgroundColor: '#5E7296',
  },
];

export default projectsDB;
