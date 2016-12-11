import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  if (Meteor.users.find({}).count() === 0) {
    console.log("No user in the system, try to create one");
    //Accounts.create({})
  }
});

