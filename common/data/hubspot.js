angular.module('assessmentApp').factory('HubSpot', function($http, $q) {

  var url  = 'https://api.hubapi.com/';
  var hapikey = '546b1993-72b9-4a6c-a264-66997066d632';

  var requestUrl = url + 'forms/v2/forms?hapikey=' + hapikey;
  var options = {
    method: 'JSONP', 
    url: requestUrl
  }

  return {

    getForms: function() {
      
      var deferred = $q.defer();

      $http.get(requestUrl).success(function(data){
        
        deferred.resolve(data);

      }).error(function(status){

        console.log('Status ::', status);

      });

      return deferred.promise;
    }
  }
 
});