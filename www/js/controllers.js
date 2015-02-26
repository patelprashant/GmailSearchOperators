angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $firebase) {
    var apiURL = 'https://search-gmail.firebaseio.com/operators';
    var ref = new Firebase(apiURL);
    var sync = $firebase(ref);

    var list = sync.$asArray();
    list.$loaded().then(function() {
      $scope.list = list;
    });
})

.controller('DashDetailCtrl', function($scope, $firebase, $stateParams){
    var apiURL = 'https://search-gmail.firebaseio.com/operators/' + $stateParams.itemId;
    var ref = new Firebase(apiURL);
    var sync = $firebase(ref);

    var list = sync.$asObject();
    list.$loaded().then(function() {
      $scope.data = list;
    });
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
