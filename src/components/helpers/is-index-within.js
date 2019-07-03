import imgUrls from '../project/constants';

const isWithinBoundry = idx => {
  return idx > -1 && idx < imgUrls.length;
};

export default isWithinBoundry;
