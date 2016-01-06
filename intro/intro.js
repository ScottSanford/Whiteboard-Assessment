angular.module('assessmentApp')

.controller('IntroCtrl', ['$scope', 'Questions', '$location', function($scope, Questions, $location){

	$scope.startQuestion = "Is your company's value getting lost in sales meetings?";

	$scope.nextPage = function() {
		$location.url('/middle');
	}

}]);