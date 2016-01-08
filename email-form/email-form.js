angular.module('assessmentApp')

.controller('EmailFormCtrl', function($scope, $location){

	$scope.currentIndex = 6;
	$scope.barValue = 6;
	$scope.totalNumQuestions = 7;

	$scope.submitForm = function() {
		console.log('submit form success!');

		// take user to Results page 
		$location.url('/results');

		// send results to HubSpot API 
	}


});