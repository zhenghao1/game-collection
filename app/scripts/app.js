'use strict';

angular.module('gameCollectionApp', ['ui.router', 'gameCollectionApp.controllers'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
  });
