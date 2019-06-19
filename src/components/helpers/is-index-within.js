import imgUrls from './images-info';

const isWithinBoundry = idx => {
  return idx > -1 && idx < imgUrls.length;
};

export default isWithinBoundry;
