/**
 * Created by ives on 2016/12/11.
 */

FlowRouter.route('/', {
  action: function () {
     BlazeLayout.render('mainLayout', {sidebar : "defaultSidebar", content:"dashboard"});
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
/**
 *
 */
FlowRouter.route('/dashboard', {
  triggersEnter : [function () {
    console.log(TAPi18n.__('system_name', {}, TAPi18n.getLanguage()));
    Session.set('DocumentTitle', TAPi18n.__('system_name', {}, TAPi18n.getLanguage()));
  }],
  action : function() {
    BlazeLayout.render('mainLayout', {sidebar : "defaultSidebar", content:"dashboard"});
  }
});

FlowRouter.route('/account/profile', {
  action: function () {
    BlazeLayout.render('mainLayout', {sidebar : "accountSidebar", content:"profile"});
  }
});

FlowRouter.route('/admin/settings', {
  action: function() {
    BlazeLayout.render('mainLayout', {sidebar : "adminSidebar", content:"settings"});
  }
});
/**
 * not found action
 * @type {{action: FlowRouter.notFound.action}}
 */
FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render('notfound');
  }
};