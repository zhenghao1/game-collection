'use strict';

var Ctrl = angular.module('gameCollectionApp.controllers', []);

Ctrl.controller('GameListCtrl', function ($scope) {
    $scope.games = [
        {
            "id": "18971",
            "name": {
                "us": "Hohokum",
                "uk": "Hohokum"
            },
            "platform": {
                "id": "5",
                "name": "PS3"
            },
            "updated_date": "2013-09-19T14:43:30.00+0000",
            "url": "http://www.gamesradar.com/ps3/hohokum",
            "images": {
                "thumbnail": "http://static.gamesradar.com/images/empty_01_logo.jpg"
            }
        },
        {
            "id": "18871",
            "name": {
                "us": "Narco Terror",
                "uk": "Narco Terror"
            },
            "platform": {
                "id": "5",
                "name": "PS3"
            },
            "release_date": {
                "us": "2013-07-30T13:37:24.00+0000"
            },
            "updated_date": "2013-07-30T13:37:27.00+0000",
            "url": "http://www.gamesradar.com/ps3/narco-terror",
            "images": {
                "thumbnail": "http://static.gamesradar.com/images/empty_01_logo.jpg"
            }
        },
        {
            "id": "18809",
            "name": {
                "us": "LEGO Movie Game",
                "uk": "LEGO Movie Game"
            },
            "platform": {
                "id": "5",
                "name": "PS3"
            },
            "updated_date": "2013-07-16T12:59:13.00+0000",
            "url": "http://www.gamesradar.com/ps3/lego-movie-game",
            "images": {
                "thumbnail": "http://static.gamesradar.com/images/empty_01_logo.jpg"
            }
        }
    ];
});
