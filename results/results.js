angular.module('assessmentApp')

.controller('ResultsCtrl', function($scope, localStorageService, Util){

  	var finalScore = localStorageService.get('score');
	console.log(finalScore);

	$scope.text = Util.selectCategory(finalScore);

});