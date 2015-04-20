'use strict';

/**
 * @ngdoc function
 * @name shopngApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shopngApp
 */
angular.module('shopngApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
