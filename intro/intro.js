angular.module('assessmentApp')

.controller('IntroCtrl', function($scope, $location){

	$scope.startQuestion = "Is your company's value getting lost in sales meetings?";

	$scope.startAsssessment = function() {
		$location.url('/questions');
	}

});