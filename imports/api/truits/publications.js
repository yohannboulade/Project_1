import { Meteor } from 'meteor/meteor';
import TruitCollection from '.';

Meteor.publish('truits.getAll', function truitsGetAll() {
  if (!this.userId) {
    return this.ready();
  }
  return TruitCollection.find({}, { sort: { createdAt: -1 }, limit: 10000 });
});
