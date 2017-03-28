(function () {
	'use strict';

	angular.module('feedToMuch',[])
	.controller('feedEnough',['$scope', feedEnough]);
	feedEnough.$inject = ['$scope'];
	function feedEnough($scope){
		$scope.foodList = 'apple, some eggs, coffee';
		$scope.resultOfLunchMenuCheck = '';
		$scope.solveFoodList = function () {
			$scope.lunchArray = $scope.foodList.split(',');
			$scope.resultOfLunchMenuCheck = $scope.lunchArray.length;
		}
	}
}
)();
