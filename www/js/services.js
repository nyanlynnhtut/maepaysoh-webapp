angular.module('starter.services', [])

.factory('Party', function($http, localStorageService) {

  var API_ENDPOINT = 'http://api.maepaysoh.org/party?';
  var API_TOKEN = 'token=3b4295df-9b30-588e-8d22-f250f396cc81';

  getFromCache = function() {
    return localStorageService.get('mps_parties');
  };
  
  return {
    getAll:  function() {
      return $http.get(API_ENDPOINT + API_TOKEN + '&font=zawgyi');
    },
    get: function(partyId) {
      var parties = getFromCache();

      for (var i = 0; i < parties.length; i++) {
        if (parties[i]._id === partyId) {
          return parties[i];
        }
      }
      return null;
    }
  };
})

.factory('Candidate', function($http, localStorageService) {

  var API_ENDPOINT = 'http://api.maepaysoh.org/candidate/list?';
  var API_TOKEN = 'token=3b4295df-9b30-588e-8d22-f250f396cc81';

  getFromCache = function() {
    return localStorageService.get('mps_candidates');
  };
  
  return {
    getAll:  function() {
      return $http.get(API_ENDPOINT + API_TOKEN + '&font=zawgyi');
    },
    get: function(candidateId) {
      var candidates = getFromCache();

      for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].id === candidateId) {
          return candidates[i];
        }
      }
      return null;
    }
  };
});
