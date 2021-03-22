import { check, Match } from 'meteor/check';

const IdValidator = Match.Where((x) => {
  check(x, String);
  return /^[23456789ABCDEFGHJKLMNOPQRSTWXYZabcdefghijkmnopqrstuvwxyz]{17}$/.test(x);
});

export default IdValidator;
