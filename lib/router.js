/**
 * Created by ives on 2016/12/11.
 */

FlowRouter.route('/', {
  action: function () {
     BlazeLayout.render('defaultLayout', {content:"dashboard"});
     //BlazeLayout.go('/dashboard');
   }
});
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
FlowRouter.route('/dashboard', {
  action : function() {
    BlazeLayout.render('defaultLayout', {content:"dashboard"})
  }
});

