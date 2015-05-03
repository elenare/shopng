'use strict';

/**
 * @ngdoc function
 * @name shopngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shopngApp
 */
angular.module('shopngApp')
  .controller('MainCtrl', function ($scope, katalogService) {
  	$scope.searchItem = function() {
  		$scope.searchword = $scope.input;
  		$scope.results = katalogService.search({bezeichnung : $scope.input});
  		$scope.input = '';
  	};
  });
