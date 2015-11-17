'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('bodasApp', [
  'ngRoute',
]);

app.
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login',{templateUrl: 'partials/login.html', controller: 'loginCtrl'});
        $routeProvider.otherwise({redirectTo: '/login'})
    }]);