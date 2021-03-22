import { check, Match } from 'meteor/check';
// VRAI -> si taille de x est supérieure à 0, et que la taille  de x est inférieur à 256
// FAUX
// taille de x = x.lenght
const SizedString = Match.Where((x) => {
  check(x, String);
  return x.length > 0 && x.length < 256;
});

export default SizedString;
