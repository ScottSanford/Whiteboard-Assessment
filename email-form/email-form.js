angular.module('assessmentApp')

.controller('EmailFormCtrl', function($scope, $location, localStorageService){

	$scope.currentIndex      = 5;
	$scope.barValue          = 6;
	$scope.totalNumQuestions = 6;
	$scope.firstNameReq      = false;
	$scope.emailReq          = false;

	var finalScore = localStorageService.get('score');

	$scope.submitForm = function() {

		var firstNameValid = $scope.resultsForm.firstName.$valid;
		var emailValid     = $scope.resultsForm.userEmail.$valid;

		var validName = !firstNameValid ? true : false;
		$scope.firstNameReq = validName; 

		var validEmail = !emailValid ? true : false;
		$scope.emailReq = validEmail;
		// send results to HubSpot API 

		if (firstNameValid && emailValid) {

			$location.url('/results');
			
		}

		// take user to Results page 

	}

	$scope.prev = function() {
		$location.url('/questions?index=2');
	}


});