const slugify = text => {
  const spaceRegex = /\s+/g;
  const multipleRegex = /[^\w\-]+/g;
  const nonWordRegex = /\-\-+/g;
  const trimStartRegex = /^-+/;
  const trimEndRegex = /-+$/;
};

export default slugify;
