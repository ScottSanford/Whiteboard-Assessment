angular.module('assessmentApp')

.controller('QuestionsCtrl', function(
	$scope, $location, $routeParams,
	Questions, radioGroup, Whiteboard, Util,
	localStorageService) {

	// Progress Bar
	$scope.barValue = 0;
	$scope.totalNumQuestions = 6;
	$scope.currentIndex = 0;
	$scope.whiteIndex = 0;

	$scope.initQs = Questions;
	$scope.radios = radioGroup;
	$scope.initQuestions = true;
	$scope.whiteboardQs = false;

	$scope.showPrev = false;
	$scope.data = {
		group1: null, 
		group2: null
	}
	
	$scope.next = function() {

		if ($scope.initQuestions) {
			
			var i = $scope.currentIndex;
			var score = 'score';

			Questions[i][score] = $scope.data.group1;
			console.log("Questions:: ", Questions);

			// show Previous Button
			if (i > 0) {
				$scope.showPrev = true;
			}

			if (i === 2) {

				$scope.initQuestions = false;
				$scope.whiteboardQs = true;
			  
				var finalScore = Util.add(Questions[0].score, Questions[1].score, Questions[2].score);
				$scope.whiteboardquestions = Util.selectCategory(finalScore);
				
			}
		} else {
			$scope.whiteIndex++
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