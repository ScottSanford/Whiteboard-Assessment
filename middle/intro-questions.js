angular.module('assessmentApp').factory('Questions', function() {

    var questions = {
      "one": "How easy is it for your field sales reps to access the content they need for in-person meetings?", 
      "two": "How well do customers understand the total value of your company and its products through discussions with sales reps?", 
      "three": "How often do your field sales teams have the tools to counter misperceptions of your company during in-person conversations?"
  	}

  	return questions;
        
});