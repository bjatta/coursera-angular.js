(function () {
	'use strict';

	angular.module('feedToMuch',[])
	.controller('feedEnough',['$scope', feedEnough]);
	feedEnough.$inject = ['$scope'];
	function feedEnough($scope){
		$scope.foodList = 'apple, some eggs, coffee';
		$scope.resultOfLunchMenuCheck = '';
		$scope.lunchArray = [];
		$scope.emptyDish  = [];
		
		$scope.solveFoodList = function () {
		$scope.lunchArray.length = 0;
		$scope.emptyDish.length  = 0;
			$scope.foodList.split(',').forEach(
				function(el){
					if (el.length)
						$scope.lunchArray.push(el);
					else
						$scope.emptyDish.push(el);
				});
			$scope.resultOfLunchMenuCheck = $scope.lunchArray.length;
		}
		
		$scope.resultToWord = function (){
			if (!$scope.resultOfLunchMenuCheck) {return;}
			switch (true){
				case (1 >  $scope.resultOfLunchMenuCheck): {
					return "Too hungry for this! ";}
				case (3 >  $scope.resultOfLunchMenuCheck): {
					return "Enjoy! But U can more";}
				case (3 == $scope.resultOfLunchMenuCheck): {
					return "Enjoy!";}
				default: {return "Too much";}
			}
		}

		$scope.emptyDishWarning = function(){
			if ($scope.emptyDish.length && $scope.lunchArray.length) {
				return 'Why U serve ' + $scope.emptyDish.length + ' empty Dish?';
			}
			return '';
		}
	}
}
)();
