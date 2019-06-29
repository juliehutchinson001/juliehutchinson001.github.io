/* eslint-disable no-param-reassign */
import slugify from './slugify';

let slugifiedName;

const imgUrls = [
  {
    url: 'http://personal.psu.edu/xqz5228/jpg.jpg',
    projectName: 'Tweet Generator',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    others: {
      technologies: 'React',
      link: 'gitHubLink',
      live: 'heroku',
    },
  },
  {
    url: 'https://i.kym-cdn.com/photos/images/original/001/468/202/b02.jpg',
    projectName: 'Task Manager',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    others: {
      technologies: 'React',
      link: 'gitHubLink',
      live: 'heroku',
    },
  },
  {
    url: 'https://i.ytimg.com/vi/7CZTc4TxR5I/hqdefault.jpg',
    projectName: 'Hangman Game',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    others: {
      technologies: 'React',
      link: 'gitHubLink',
      live: 'heroku',
    },
  },
  {
    url:
      'https://villagevoice.freetls.fastly.net/wp-content/uploads/2013/07/8918923.0-1366x738.jpg',
    projectName: 'Pixel-Art Painter',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    others: {
      technologies: 'React',
      link: 'gitHubLink',
      live: 'heroku',
    },
  },
  {
    url:
      'https://m.media-amazon.com/images/M/MV5BMjAxNzkxMDU1Ml5BMl5BanBnXkFtZTcwNDkzNzgyMw@@._V1_CR0,59,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
    projectName: 'Lynda Mock',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    others: {
      technologies: 'React',
      link: 'gitHubLink',
      live: 'heroku',
    },
  },
  {
    url:
      'https://vignette.wikia.nocookie.net/despicableme/images/3/3c/Kylewhite.png/revision/latest/scale-to-width-down/400?cb=20170711185130',
    projectName: 'A.R.F.I.S.S',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    others: {
      technologies: 'React',
      link: 'gitHubLink',
      live: 'heroku',
    },
  },
];

export const slugifiedNameToRoute = () => {
  imgUrls.forEach((project, idx, arrData) => {
    slugifiedName = slugify(project.projectName);
    arrData[idx].sluggedName = slugifiedName;
  });
};

slugifiedNameToRoute();

export default imgUrls;
