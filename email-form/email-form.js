angular.module('assessmentApp')

.controller('EmailFormCtrl', function($scope, $location, localStorageService){

	$scope.currentIndex = 5;
	$scope.barValue = 6;
	$scope.totalNumQuestions = 6;

	var finalScore = localStorageService.get('score');

	$scope.submitForm = function() {
		if ($scope.resultsForm.$valid) {
			console.log($scope.resultsForm);
		}
		// send results to HubSpot API 


		// take user to Results page 
		$location.url('/results');

	}

	$scope.prev = function() {
		$location.url('/questions?index=2');
	}


});