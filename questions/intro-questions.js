angular.module('assessmentApp').factory('Questions', function() {

    var questions = [
    	{"question": "How easy is it for your field sales reps to access the content they need for in-person meetings?"},
    	{"question": "How well do customers understand the total value of your company and its products through discussions with sales reps?"},
    	{"question": "How often do your field sales teams have the tools to counter misperceptions of your company during in-person conversations?"},
    ]

  	return questions;
        
});