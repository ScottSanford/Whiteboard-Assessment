angular.module('assessmentApp')

.controller('QuestionsCtrl', function(
	$scope, $location, $routeParams,
	Questions, radioGroup, Whiteboard, Util,
	localStorageService) {

	// Progress Bar
	$scope.barValue          = 0;
	$scope.totalNumQuestions = 6;
	$scope.currentIndex      = 0;
	$scope.whiteIndex        = 0;

	$scope.initQs            = Questions;
	$scope.radios            = radioGroup;
	$scope.initQuestions     = true;
	$scope.whiteboardQs      = false;
	$scope.rmInit            = false;
	$scope.rmWhiteboard      = false;


	$scope.showPrev = false;
	$scope.data = {
		group1: null, 
		group2: null
	}

	// if coming back from Email Page
	if ($routeParams.index === "2") {

		$scope.initQuestions = false;
		$scope.whiteboardQs  = true;

		var finalScore = Util.add(Questions[0].score, Questions[1].score, Questions[2].score);
		localStorageService.set('score', finalScore);
		$scope.whiteboardquestions = Util.selectCategory(finalScore);

		$scope.currentIndex = 5;
		$scope.barValue = 5;
		$scope.whiteIndex = 2;
		$scope.showPrev = true;

	}
	
	$scope.next = function() {

		if ($scope.initQuestions && $scope.data.group1 === null) {
			$scope.rmInit = true;
			return;
		}		

		if ($scope.whiteboardQs && $scope.data.group2 === null) {
			$scope.rmWhiteboard = true;
			return;
		}

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
			$scope.rmInit = false;
			$scope.barValue++;
			$scope.currentIndex++;

		} else {

			if ($scope.whiteIndex == 2) {
				$location.url('/email-form');
			}
			
			$scope.whiteIndex++
			$scope.data.group2 = null;
			$scope.rmWhiteboard = false;
			$scope.barValue++;
			$scope.currentIndex++;
		}
	
	}

	$scope.prev = function() {	

		// hide Previous button when first question is shown
		if ($scope.currentIndex <= 1) {
			$scope.showPrev = false;
		}

		if ($scope.initQuestions) {
			$scope.currentIndex--;
			$scope.barValue--;
			$scope.rmInit = false;
			return;
		}

		if($scope.whiteIndex == 0 && $routeParams.index == undefined) {
			
			$scope.whiteboardQs = false;
			$scope.initQuestions = true;

			$scope.currentIndex--;
			$scope.barValue--;

			$scope.rmInit = false;
			return;

		} else if ($scope.whiteIndex >= 0 && $routeParams.index == undefined) {

			$scope.whiteIndex--;
			$scope.currentIndex--;
			$scope.barValue--;

			$scope.rmWhiteboard = false;
			return;

		}

		if ($routeParams.index === "2" && $scope.whiteIndex == 0)

		// if coming from Email Form
		if ($routeParams.index === "2") {
			$scope.whiteIndex--;
			$scope.showPrev = true;
			$scope.barValue--;
			$scope.currentIndex--;
			$scope.rmInit = false;
			$scope.rmWhiteboard = false;
			return;
		}


	};	


});