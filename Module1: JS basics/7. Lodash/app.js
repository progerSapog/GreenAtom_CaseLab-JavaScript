const arr = [10, 1, 21, 1, 33, 3, 33, 5, 8, 8, 1, 3, 5];

const sortedArr = _.sortBy(_.uniq(arr))
console.log(sortedArr);

const userSkills = {
  css: 'b2',
  html: 'c1',
  js: 'a2',
  ts: null,
  react: undefined,
  vue: null,
  lodash: 'a1'
}

const userApprovedSkills = _.pickBy(userSkills, (prop) => !_.isNil(prop))
console.log(userApprovedSkills);
