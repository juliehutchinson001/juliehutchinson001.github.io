import slugify from './slugify';

let slugifiedName;
// TODO: Change to url
const imgUrls = [
  {
    url: 'http://personal.psu.edu/xqz5228/jpg.jpg',
    projectName: 'Tweet Generator',
    slugifiedName: `${slugifiedName}`,
  },
  {
    url: 'https://i.kym-cdn.com/photos/images/original/001/468/202/b02.jpg',
    projectName: 'Task Manager',
    slugifiedName: `${slugifiedName}`,
  },
  {
    url: 'https://i.ytimg.com/vi/7CZTc4TxR5I/hqdefault.jpg',
    projectName: 'Hangman Game',
    slugifiedName: `${slugifiedName}`,
  },
  {
    url:
      'https://villagevoice.freetls.fastly.net/wp-content/uploads/2013/07/8918923.0-1366x738.jpg',
    projectName: 'Pixel-Art Painter',
    slugifiedName: `${slugifiedName}`,
  },
  {
    url:
      'https://m.media-amazon.com/images/M/MV5BMjAxNzkxMDU1Ml5BMl5BanBnXkFtZTcwNDkzNzgyMw@@._V1_CR0,59,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
    projectName: 'Lynda Mock',
    slugifiedName: `${slugifiedName}`,
  },
  {
    url:
      'https://vignette.wikia.nocookie.net/despicableme/images/3/3c/Kylewhite.png/revision/latest/scale-to-width-down/250?cb=20170711185130',
    projectName: 'A.R.F.I.S.S',
    slugifiedName: `${slugifiedName}`,
  },
];

imgUrls.forEach(project => {
  slugifiedName = slugify(project.projectName);
});

// TODO: Change id to name of the project for route. E.g. projects/lynda-mock
export default imgUrls;
