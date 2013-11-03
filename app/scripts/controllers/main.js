'use strict';

var Ctrl = angular.module('gameCollectionApp.controllers', []);

Ctrl.controller('GameListCtrl',
                ['$scope', '$http', function ($scope, $http) {
    $scope.orderProp = "name.us";
    $http.get('../../games.json', function(data) {
        $scope.games = data;
    });
}]);
