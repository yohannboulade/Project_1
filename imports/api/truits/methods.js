import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import SizedString from '/imports/utils/SizedString';
import TruitCollection from '.';

Meteor.methods({
  'truits.create': function truitsCreate(content) {
    if (!this.userId) {
      throw new Meteor.Error(403, 'Vous devez être connecter pour faire cela =)');
    }
    check(content, SizedString);

    return TruitCollection.insert({
      content,
      createdAt: new Date(),
      userId: this.userId,
    });
  },
});
