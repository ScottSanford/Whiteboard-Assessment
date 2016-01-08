angular.module('assessmentApp')

.controller('WhiteboardCtrl', function($scope, $routeParams, $location, Whiteboard){


	function secondQs(index) {
		$scope.secondQuestions = [
			{text: Whiteboard[index].questions.qOne},		
			{text: Whiteboard[index].questions.qTwo}, 		
			{text: Whiteboard[index].questions.qThree} 
		];
	}

	$scope.next = function() {

		$scope.questionIndex++;
		$scope.barValue++;
		$scope.currentIndex++;

		var qIndex = $scope.questionIndex;

		console.log(qIndex);

		if (qIndex === 3) {
			$location.url('/emailForm');
		}
	}

	$scope.prev = function() {	

		var qIndex = $scope.questionIndex;

		if (qIndex === 0) {
			$location.url('/initQs?currentIndex=2')
		}

		$scope.barValue--;
		$scope.questionIndex--;


	};	


});