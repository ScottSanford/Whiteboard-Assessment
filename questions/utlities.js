angular.module('assessmentApp')

.factory('Util', function(Whiteboard) {

		var util = {

			add: function(a,b,c) {
				return a + b + c;
			}, 

			selectCategory: function (finalScore) {
				if (finalScore <= 4) {

					return Whiteboard[0];
			
				} else if (finalScore >= 5 && finalScore <= 7) {

					return Whiteboard[1];
			
				} else if (finalScore >= 8 && finalScore <= 11) {
			
					return Whiteboard[2];
			
				} else if (finalScore >= 12) {
			
					return Whiteboard[3];
			
				}
			}
		}

		return util;  
    
});