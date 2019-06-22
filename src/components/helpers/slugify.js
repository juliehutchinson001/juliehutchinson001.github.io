/* eslint-disable no-useless-escape */

const slugify = text => {
  const spaceRegex = /\s+/g;
  const multipleRegex = /[^\w\-]+/g;
  const nonWordRegex = /\-\-+/g;
  const trimStartRegex = /^-+/;
  const trimEndRegex = /-+$/;
  return text
    .toString()
    .toLowerCase()
    .replace(spaceRegex, '-') // Replace spaces with -
    .replace(nonWordRegex, '') // Remove all non-word chars
    .replace(multipleRegex, '-') // Replace multiple - with single -
    .replace(trimStartRegex, '') // Trim - from start of text
    .replace(trimEndRegex, ''); // Trim - from end of text
};

export default slugify;
