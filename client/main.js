Meteor.startup(function () {
  var getUserLanguage = function () {
    return "zh";
  };

  //Session.set("showLoadingIndicator", true);
  TAPi18n.setLanguage(getUserLanguage())
          .done(function () {
            //Session.set("showLoadingIndicator", false);
            console.log('setLanguage success!');
          })
          .fail(function (error_message) {
            // Handle the situation
            console.log(error_message);
          });

  Deps.autorun(function(){
    document.title = Session.get("DocumentTitle");
  });
});