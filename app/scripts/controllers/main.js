'use strict';

/**
 * @ngdoc function
 * @name shopngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shopngApp
 */
angular.module('shopngApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
