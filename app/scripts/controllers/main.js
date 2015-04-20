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
  	$scope.searchItem = function() {
  		$scope.result = $scope.input;
  		$scope.input = '';
  	};
  });
