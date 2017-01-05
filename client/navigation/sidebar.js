Template.defaultSidebar.onRendered(function () {
  $('#side-menu').metisMenu();
  var url = window.location;
  console.log('url:' + url);
  var element = $('ul.nav a').filter(function() {
      return this.href == url;
  }).addClass('active').parent().parent().addClass('in').parent();
  var element = $('ul.nav a').filter(function() {
    return this.href == url;
  }).addClass('active').parent();
  while (true) {
    if (element.is('li')) {
      element = element.parent().addClass('in').parent();
    } else {
      break;
    }
  }
});

Template.accountSidebar.onRendered(function () {
  $('#side-menu').metisMenu();
  var url = window.location;
  //console.log('url:' + url);
  var element = $('ul.nav a').filter(function() {
    return this.href == url;
  }).addClass('active').parent().parent().addClass('in').parent();
  var element = $('ul.nav a').filter(function() {
    return this.href == url;
  }).addClass('active').parent();
  while (true) {
    if (element.is('li')) {
      element = element.parent().addClass('in').parent();
    } else {
      break;
    }
  }
});

Template.adminSidebar.onRendered(function () {
  $('#side-menu').metisMenu();
  var url = window.location;
  //console.log('url:' + url);
  var element = $('ul.nav a').filter(function() {
    return this.href == url;
  }).addClass('active').parent().parent().addClass('in').parent();
  var element = $('ul.nav a').filter(function() {
    return this.href == url;
  }).addClass('active').parent();
  while (true) {
    if (element.is('li')) {
      element = element.parent().addClass('in').parent();
    } else {
      break;
    }
  }
});
