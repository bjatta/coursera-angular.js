(function () {
	'use strict';

	angular.module('feedToMuch',[])
	.controller('feedEnough',['$scope', feedEnough]);
	feedEnough.$inject = ['$scope'];
	function feedEnough($scope){
		$scope.foodList = 'apple, some eggs, coffee';
		$scope.resultOfLunchMenuCheck = '';
		$scope.lunchArray  = [];
		$scope.emptyDish   = [];
		$scope.lunchResult = '';
		$scope.dishResult  = '';
		
		$scope.solveFoodList = function () {
		$scope.lunchArray.length = 0;
		$scope.emptyDish.length  = 0;
		$scope.foodList.split(',').forEach(
			function(el){
				var tempWord = el.replace(/^ | $|  /g,'');
				if (tempWord.length)
					$scope.lunchArray.push(tempWord);
				else
					$scope.emptyDish.push(tempWord);
			});
		$scope.resultOfLunchMenuCheck = $scope.lunchArray.length;
		}
		
		$scope.resultToWord = function (){
			switch (true){
				case (1 >  $scope.resultOfLunchMenuCheck): {
					$scope.lunchResult = 'alert alert-warning';
					return "Too hungry for this! ";}
				case (3 >  $scope.resultOfLunchMenuCheck): {
					$scope.lunchResult = 'alert alert-info';
					return "Enjoy! But U can more";}
				case (3 == $scope.resultOfLunchMenuCheck): {
					$scope.lunchResult = 'alert alert-success';
					return "Enjoy!";}
				case (true): {
					$scope.lunchResult= 'alert alert-danger'
					return "Too much";}
			}
		}

		$scope.emptyDishWarning = function(){
			if (!$scope.lunchArray.length) {
				$scope.dishResult  = 'alert alert-danger';
				return 'Please enter data first';
			}
			if ($scope.emptyDish.length) {
				$scope.dishResult  = 'alert alert-danger';
				return 'Why U serve ' + $scope.emptyDish.length + ' empty Dish?';
			}
			$scope.dishResult  = '';
			return '';
		}

		$scope.solveFoodList();
	}
}
)();
