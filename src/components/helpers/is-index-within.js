import projectsDB from '../project/constants';

const isWithinBoundry = idx => {
  return idx > -1 && idx < projectsDB.length;
};

export default isWithinBoundry;
