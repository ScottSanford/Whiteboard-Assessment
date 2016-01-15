angular.module('assessmentApp').factory('HubSpot', function($http, $q) {


  var HubSpotBase = ' https://api.hubapi.com';
  var formGuid    = '1f0643e2-d39b-442d-942f-bd4b2a8898cf';
  var hapikey     = '92d3eee9-9b63-45df-810e-ebe3b0d5b476';

  var HubSpot = {};

    HubSpot.submitFormData = function() {

      var postUrl  = 'https://forms.hubspot.com/uploads/form/v2/';
      var portalId = '1930616';
      var dummyData = {
        firstName: 'Scott', 
        lastName: 'Sanford', 
        email: 'email@email.com'
      }
      var url = postUrl + portalId + '/' + formGuid;

      $http({
        method: 'POST', 
        url: url, 
        data: HubSpot.toParams(dummyData), 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data, status){
        console.log(typeof data, data,  status);
        return data;
      });

    }; 

   HubSpot.toParams = function(obj) {
      var p = [];
      for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
      }
      return p.join('&');
    }

    HubSpot.getFormData = function() {

      var deferred = $q.defer();
      var url = HubSpotBase + "/forms/v2/forms/" + formGuid + '?hapikey=' + hapikey;
      var u = 'https://api.hubapi.com/forms/v2/forms/561d9ce9-bb4c-45b4-8e32-21cdeaa3a7f0/?hapikey=demo';

      $http.get(url).success(function(data){
        deferred.resolve(data);
      })

      return deferred.promise;
    }



return HubSpot;
 
});