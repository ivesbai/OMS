/**
 * Created by ives on 2016/12/11.
 */

FlowRouter.route('/', {
  action : function() {
    BlazeLayout.render('main', {});
  }}
);
FlowRouter.route('/logout', {
  action : function() {
    Meteor.logout(function(err) {
      if (err) {
        console.error(err);
      } else {
        FlowRouter.go('/');
      }
    });

  }
});