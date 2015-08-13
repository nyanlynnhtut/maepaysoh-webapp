angular.module('starter.controllers', [])

.controller('PartyCtrl', function($scope, Party, localStorageService) {
  $scope.parties =  [];

  var cached = localStorageService.get('mps_parties');

  if ( cached == null) {
    console.log('Load from server');

    Party.getAll().success(function(data){
      $scope.parties = data.data;
      localStorageService.set('mps_parties', data.data);
    });

  } else {
    $scope.parties = cached;
  }
})
.controller('PartyDetailCtrl', function($scope, $stateParams, Party) {
  $scope.party = Party.get($stateParams.partyId);
})

.controller('CandidateCtrl', function($scope, Candidate, localStorageService) {
  $scope.candidates =  [];

  var cached = localStorageService.get('mps_candidates');

  if ( cached == null) {
    console.log('Load from server');

    Candidate.getAll().success(function(data){
      $scope.candidates = data.data;
      localStorageService.set('mps_candidates', data.data);
    });

  } else {
    $scope.candidates = cached;
  }
})
.controller('CandidateDetailCtrl', function($scope, $stateParams, Candidate) {
  $scope.candidate = Candidate.get($stateParams.candidateId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
