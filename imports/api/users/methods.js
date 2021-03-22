import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import IdValidator from '/imports/utils/IdValidator';

Meteor.methods({
  'users.getEmail': function usersGetEmail(userId) {
    if (!this.userId) {
      throw new Meteor.Error(403, 'Vous devez être connecter pour faire cela =)');
    }
    check(userId, IdValidator);
    const user = Meteor.users.findOne(userId);
    if (!user) {
      throw new Meteor.Error(404, "Cet utilisateur n'existe pas :/");
    }
    return user.emails[0].address;
  },
});
