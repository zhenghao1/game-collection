'use strict';

var Ctrl = angular.module('gameCollectionApp.controllers', []);

Ctrl.controller('GameListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://localhost:6543/platform').success(function(data) {
        $scope.platforms = data;
    });
    $scope.orderProp = "name";
}]);
