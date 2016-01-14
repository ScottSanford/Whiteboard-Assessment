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

			// show Previous Button
			if (i >= 0) {
				$scope.showPrev = true;
			}

			if (i === 2) {

				$scope.initQuestions = false;
				$scope.whiteboardQs = true;
			  
				var finalScore = Util.add(Questions[0].score, Questions[1].score, Questions[2].score);
				localStorageService.set('score', finalScore);
				$scope.whiteboardquestions = Util.selectCategory(finalScore);
				
			}

			$scope.data.group1 = null;

		} else {

			if ($scope.whiteIndex == 2) {
				$location.url('/email-form');
			}
			
			$scope.whiteIndex++
			$scope.data.group2 = null;
		}
		console.log('barValue Before :: ', $scope.barValue);
		$scope.barValue++;
		console.log('barValue AFter :: ', $scope.barValue);
		$scope.currentIndex++;
	}

	$scope.prev = function() {	
		console.log('barValue Before :: ', $scope.barValue);

		var cIndex = $scope.currentIndex;
		$scope.barValue--;
		$scope.currentIndex--;

		if (cIndex <= 1) {
			$scope.showPrev = false;
		}


		if (!$scope.initQuestions) {
			$scope.whiteboardQs = false;
			$scope.initQuestions = true;

			cIndex = 2;
			$scope.barValue = 2;
		}

		console.log('barValue AFter :: ', $scope.barValue);
	};	


});