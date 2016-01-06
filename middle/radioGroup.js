angular.module('assessmentApp').factory('radioGroup', function() {

    var radioGroup = [
    	{
    	 value:1,
    	 checked:false,
       label:'1'
    	}, 
    	{
    	 value:2,
    	 checked:false,
       label:'2'
    	}, 
    	{
    	 value:3,
    	 checked:false,
       label:'3'
    	}, 
    	{
    	 value:4,
    	 checked:false,
       label:'4'
    	}, 
    	{
    	 value:5,
    	 checked:false,
       label:'5'
    	}
    ];	

  	return radioGroup;
        
});