angular.module('starter.controllers', [])

        .controller('DashCtrl', function ($scope, Operators) {
            $scope.list = Operators.all();
        })

        .controller('DashDetailCtrl', function ($scope, $firebase, $stateParams, Operators) {
            $scope.data = Operators.get($stateParams.itemId);
        })

        .controller('ChatsCtrl', function ($scope, Chats) {
            $scope.chats = Chats.all();
            $scope.remove = function (chat) {
                Chats.remove(chat);
            }
        })

        .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
            $scope.chat = Chats.get($stateParams.chatId);
        })

        .controller('FriendsCtrl', function ($scope, Friends) {
            $scope.friends = Friends.all();
        })

        .controller('ContactsCtrl', function ($scope, $cordovaContacts) {
            $scope.getContactList = function () {
                $cordovaContacts.find({filter: ''}).then(function (result) {
                    $scope.contacts = result;
                }, function (error) {
                    console.log("ERROR: " + error);
                });
            }

            $scope.createContact = function () {
            }

            $scope.removeContact = function () {
            }
        })

        .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
            $scope.friend = Friends.get($stateParams.friendId);
        })

        .controller('AccountCtrl', function ($scope) {
            $scope.settings = {
                enableFriends: true
            };
        });
