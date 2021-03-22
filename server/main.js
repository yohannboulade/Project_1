import { Meteor } from 'meteor/meteor';
import '/imports/api/truits/methods';
import '/imports/api/truits/publications';
import '/imports/api/users/methods';

Meteor.startup(() => {
  console.log('SERVER STARTED');
});
