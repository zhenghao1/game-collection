'use strict';

describe('Controller: GameListCtrl', function () {

  // load the controller's module
  beforeEach(module('gameCollectionApp'));

  var GameListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameListCtrl = $controller('GameListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of games to the scope', function () {
    expect(scope.games.length).toBe(5);
  });

  it('should set the default value of orderProp to name.us', function() {
    expect(scope.orderProp).toBe('name.us');
  });

});
