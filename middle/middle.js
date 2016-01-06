angular.module('assessmentApp')

.controller('MiddleCtrl', function(
		$scope, 
		Questions, 
		Whiteboard, 
		radioGroup, 
		localStorageService) {

	$scope.viewClass = 'middle';

	// Progress Bar Initial Value
	$scope.barValue = 0;

	// current Index and Total Number of Questions
	$scope.currentIndex = 0;
	$scope.secondIndex = 0;
	$scope.totalNumQuestions = 6;

	$scope.showInitQs = true;
	$scope.showSecondQs = false;

	$scope.initQs = [
	  {
		id: 0,
		text: Questions.one, 
		radio: radioGroup
	  },		
	  {
		id: 1,
		text: Questions.two, 
		radio: radioGroup
	  }, 		
	  {
		id: 2,
		text: Questions.three, 
		radio: radioGroup
	  } 
	];

	$scope.radioBtns = radioGroup;
	$scope.data = {
		group: null
	}
	
	// Boolean. Shows the Previous button
	$scope.showPrev = false;

	$scope.next = function() {

		var cIndex = $scope.currentIndex;
		var initQs  = $scope.initQs;
		$scope.barValue++;
		$scope.currentIndex++;

		if ($scope.showInitQs) {
			var score = 'score';

			initQs[cIndex][score] = $scope.data.group;

			if (cIndex >= 0) {
				$scope.showPrev = true;
			}

			if (cIndex == 2) {
				
			  var finalScore = sumOfScores(initQs[0].score, initQs[1].score, initQs[2].score);
			  scoreSection(finalScore);

			}
		} 

		else if (cIndex = 3) {
			$scope.secondIndex = cIndex;
			console.log($scope.secondIndex);
		}

	}

	function sumOfScores (scoreOne, scoreTwo, scoreThree) {
    	var scoreTotal = scoreOne + scoreTwo + scoreThree;
		return scoreTotal;
	}

	function scoreSection (finalScore) {

		// which Whiteboard category do you fall into? 
		selectCategory(finalScore);

		$scope.showInitQs = false;
		$scope.showSecondQs = true;

	}

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


	$scope.prev = function() {	

		var cIndex = $scope.currentIndex;
		var sIndex = $scope.secondIndex;
		$scope.barValue--;
		$scope.currentIndex--;

		if (cIndex == 0) {
			$scope.showPrev = false;
		}

	};	


});