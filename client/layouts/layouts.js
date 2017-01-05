/**
 *
 */
import { Template} from 'meteor/templating';

Template.mainLayout.helpers({
  isLoggingInProcess : function() {
    return Meteor.loggingIn();
  },
  isLoggedIn : function() {
    return !!Meteor.userId();
  }

});