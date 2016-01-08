angular.module('assessmentApp')

.controller('WhiteboardCtrl', function($scope, $routeParams, $location, Whiteboard){

	console.log("$routeParams == ", $routeParams);
	$scope.viewClass = 'middle';

	$scope.currentIndex = 3;
	$scope.questionIndex = 0;
	$scope.totalNumQuestions = 6;
	$scope.barValue = 3;

	$scope.data = {
		group: null
	}

	var finalScore = $routeParams.score;

	selectCategory(finalScore);
	console.log($scope.secondQuestions);

	function selectCategory(finalScore) {
		if (finalScore <= 4) {

			secondQs(0);
			
		} else if (finalScore >= 5 && finalScore <= 7) {

			secondQs(1);
			
		} else if (finalScore >= 8 && finalScore <= 11) {
			
			secondQs(2);
			
		} else if (finalScore >= 12) {
			
			secondQs(3);
			
		}
	}

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