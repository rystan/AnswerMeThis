Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () { return Meteor.subscribe('questions'); }
});

Router.route('/', {name: 'questList'});