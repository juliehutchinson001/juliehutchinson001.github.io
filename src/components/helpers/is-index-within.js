import imgUrls from './images-urls';

const isWithinBoundry = idx => {
  return idx > -1 && idx < imgUrls.length;
};

export default isWithinBoundry;
