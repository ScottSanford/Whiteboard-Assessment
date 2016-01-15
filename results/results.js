angular.module('assessmentApp')

.controller('ResultsCtrl', function($scope, localStorageService, Util, HubSpot){

  	var finalScore        = localStorageService.get('score');
  	var whiteboardSection = Util.selectCategory(finalScore);
  	var wbImg             = whiteboardSection.image;
  	var wbVideo           = whiteboardSection.video;
  	var wbEbook           = whiteboardSection.ebook

  	$scope.pageOne        = true;
  	$scope.pageTwo        = false;

  	$scope.showVideo      = false;
  	$scope.showEbook      = false;

  	if (finalScore <= 11) {
  		$scope.showVideo = true;
  		$scope.videoUrl  = wbVideo;
  	} else {
  		$scope.showEbook = true;
  		$scope.eBookUrl  = wbEbook

  	}


	$scope.whiteboardImg  = wbImg;

	$scope.text           = whiteboardSection;

	$scope.nextPage       = function() {
		$scope.pageOne  = false;
		$scope.pageTwo  = true;
	}

	$scope.previousPage   = function() {
		$scope.pageTwo  = false;
		$scope.pageOne  = true;
	}

	HubSpot.submitFormData();

  HubSpot.getFormData().then(function(data){
    console.log('data == ', data);
  })

});