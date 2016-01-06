'use strict';

// Declare app level module which depends on views, and components
angular.module('battleshipGame', [
  'ngRoute',
  'templateStore.templates',
  'templateStore.battleship'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
