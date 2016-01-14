angular.module('assessmentApp')

.controller('EmailFormCtrl', function($scope, $location, localStorageService){

	$scope.currentIndex = 5;
	$scope.barValue = 6;
	$scope.totalNumQuestions = 6;

	var finalScore = localStorageService.get('score');
	console.log(finalScore);

	$scope.submitForm = function() {
		if ($scope.resultsForm.$valid) {
			console.log($scope.resultsForm);
		}
		// take user to Results page 
		$location.url('/results');

		// send results to HubSpot API 
	}


});