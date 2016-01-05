angular.module('app', ['ui.router', 'app.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html',
      controller: 'home'
    })
    .state('elcamino', {
      url: '/elcamino',
      templateUrl: 'pages/elcamino/home.html',
      controller: 'elcamino'
    })
    .state('gozoypaz', {
      url: '/gozoypaz',
      templateUrl: 'pages/gozoypaz/home.html',
      controller: 'gozoypaz'
    })
    .state('media', {
      url: '/media',
      templateUrl: 'pages/media/media.html',
      // controller: ''
    })
    .state('community', {
      url: '/alcancecomunitario',
      templateUrl: 'pages/community/community.html',
      // controller: ''
    })
    .state('radio', {
      url: '/radio',
      templateUrl: 'pages/radio/radio.html',
      // controller: ''
    });


  $urlRouterProvider.otherwise("/");
})
