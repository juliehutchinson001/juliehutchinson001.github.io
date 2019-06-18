import React from 'react';
import { Link } from 'react-router-dom';

export const imgUrls = [
  {
    urlProject: 'http://personal.psu.edu/xqz5228/jpg.jpg',
    idName: 'Tweet Generator',
  },
  {
    urlProject:
      'https://i.kym-cdn.com/photos/images/original/001/468/202/b02.jpg',
    idName: 'Task Manager',
  },
  {
    urlProject: 'https://i.ytimg.com/vi/7CZTc4TxR5I/hqdefault.jpg',
    idName: 'Hangman Game',
  },
  {
    urlProject:
      'https://villagevoice.freetls.fastly.net/wp-content/uploads/2013/07/8918923.0-1366x738.jpg',
    idName: 'Pixel-Art Painter',
  },
  {
    urlProject:
      'https://m.media-amazon.com/images/M/MV5BMjAxNzkxMDU1Ml5BMl5BanBnXkFtZTcwNDkzNzgyMw@@._V1_CR0,59,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
    idName: 'Lynda Mock',
  },
  {
    urlProject:
      'https://vignette.wikia.nocookie.net/despicableme/images/3/3c/Kylewhite.png/revision/latest/scale-to-width-down/250?cb=20170711185130',
    idName: 'A.R.F.I.S.S',
  },
];

const getImages = () => {
  return imgUrls.map((eachImg, id) => (
    <li>
      <Link to={`/projects/${id}`}>
        <img
          src={eachImg.urlProject}
          alt={eachImg.urlProject}
          key={eachImg.idName}
        />
      </Link>
    </li>
  ));
};

export default getImages;
