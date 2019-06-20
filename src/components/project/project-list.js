import React from 'react';
import { Link } from 'react-router-dom';
import imgUrls from '../helpers/images-info';

const Images = () => {
  return imgUrls.map((eachImg, id) => (
    <li key={eachImg.projectName} className="">
      <Link to={`/projects/${id}`}>
        <img className="" src={eachImg.url} alt={eachImg.url} />
      </Link>
    </li>
  ));
  // <Route path={`${match.path}/:topicId`} component={IndividualProject} />
};

export default Images;
