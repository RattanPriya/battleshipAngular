'use strict';

// Declare app level module which depends on views, and components
angular.module('grid', [
  'ngRoute',
  'templateStore.view1',
  'templateStore.view2',
  'templateStore.templates',
  'templateStore.battleship'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
