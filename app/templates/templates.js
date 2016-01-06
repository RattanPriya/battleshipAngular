angular.module('templateStore.templates', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/templates', {
        templateUrl: 'templates/battleship.html'
    })
}])

.controller('gridController', ['$scope', '$http', function($scope) {
    $scope.hello ="priya";
    $scope.board = [];
    $scope.size = 5;
    $scope.counter = $scope.size * 3;
    $scope.SHIP_UNATTACKED = 1;
    $scope.SHIP_ATTACKED = 2;
    $scope.SHIP_NOT_THERE=0;
    $scope.SHIP_NOT_THERE_ATTACKED = 3;
     $scope.init = function(shipArray) {
        for (var i = 0; i < $scope.size; i++) {
            $scope.board[i] = [0, 0, 0, 0, 0];
        }
    
        if (shipArray.length > 5) {
            alert("invalid input");
        }
        
        for (var i = 0; i < shipArray.length; i++) {
            if (shipArray[i] + 2 <= 4 && shipArray[i] >= 0) {
                $scope.board[shipArray[i]][i] = 1;
                $scope.board[shipArray[i] + 1][i] = 1;
                $scope.board[shipArray[i] + 2][i] = 1;
            }
        }

        console.log("Get ready to play");
    }

    $scope.attack = function(cordX, cordY) {
        if ($scope.board[cordX][cordY] === $scope.SHIP_UNATTACKED) {
            $scope.counter--;
            
            if ($scope.isGameOver()) {
                alert("Game Over");
                $scope.gameOver = true;
                return;
            }

            $scope.board[cordX][cordY] = $scope.SHIP_ATTACKED;
            console.log("ship found..keep guessing");
            return true;
        } else if($scope.board[cordX][cordY] === $scope.SHIP_NOT_THERE){
            $scope.board[cordX][cordY] = $scope.SHIP_NOT_THERE_ATTACKED;
        }
        console.log("Hit again next time");
        return false;
    }

    $scope.isGameOver = function() {
        return $scope.counter <= 0;
    }
}])
.directive('battleshipGrid', function() {
    return {
        restrict : "E",
        templateUrl : 'templates/grid.html',
        controller : "gridController"
    };
})