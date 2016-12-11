/**
 * Created by ives on 2016/12/11.
 */

import { Template} from 'meteor/templating';

Template.login.onRendered(function() {
  console.log(Meteor.user());
  console.log('login form rendered!');
});

Template.login.onCreated(function() {
  console.log(Meteor.user());
  console.log('login form created!');
});

Template.login.onDestroyed(function() {
  console.log(Meteor.user());
  console.log('login form destroyed!');
});

Template.login.helpers({

});
Template.login.events({
    'click #login' : function (event, template) {
        event.preventDefault();
        //console.log(event);
        var email = template.$('#email').val();
        var password = template.$('#password').val();
        console.log(email, password);
        Meteor.loginWithPassword(email, password, function(err) {
            if (err) {
                console.error(err);
            } else {
                console.log("login successfully!");
                console.log(Meteor.user());
                //FlowRouter.go('/index');
            }
        });
    }
});