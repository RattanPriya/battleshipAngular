angular.module('templateStore.battleship', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/battleship', {
        templateUrl: 'templates/battleship.html',
        controller: 'battleshipCtrl'
    })
}])
.controller('battleshipCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.board1 = [1,1,1,1,1]
	$scope.board2 = [0,1,1,1,0]
}])
