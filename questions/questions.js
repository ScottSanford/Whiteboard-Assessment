angular.module('assessmentApp')

.controller('QuestionsCtrl', function(
		$scope, $location, $routeParams,
		Questions, Whiteboard, radioGroup, 
		localStorageService) {

	// Progress Bar
	$scope.barValue = 0;
	$scope.totalNumQuestions = 6;
	$scope.currentIndex = 0;

	$scope.initQs = Questions;
	$scope.radios = radioGroup;

	$scope.showPrev = false;
	$scope.data = {group: null}
	
	function add (a, b, c) {
    	return a + b + c;
	}

	$scope.next = function() {

		var i = $scope.currentIndex;
		var score = 'score';

		Questions[i][score] = $scope.data.group;

		console.log(Questions);

		// show Previous Button
		if (i > 0) {
			$scope.showPrev = true;
		}

		if (i === 2) {
		  
		  var finalScore = add(Questions[0].score, Questions[1].score, Questions[2].score);
		  console.log("finalScore", finalScore);

		}

		$scope.barValue++;
		$scope.currentIndex++;
	}

	$scope.prev = function() {	

		var cIndex = $scope.currentIndex;
		$scope.barValue--;
		$scope.currentIndex--;

		console.log("current index, ", cIndex);

		if (cIndex === 0) {
			$scope.showPrev = false;
		}

	};	


});