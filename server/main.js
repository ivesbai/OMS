import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  if (Meteor.users.find({}).count() === 0) {
    console.log("No user in the system, try to create one");
    var userId = Accounts.createUser({username:'admin',
                     email:'admin@some.com',
                     password:'12345678',
                     profile : {
                       name : 'Super Administrator'
                     }});
    if (userId) {
      Roles.addUsersToRoles(userId, 'admin', Roles.GLOBAL_GROUP);
    }
  }
});

