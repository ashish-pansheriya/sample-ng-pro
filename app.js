angular.module('app', ['ionic'])

.controller('ChatsCtrl', function($scope, ChatService) {
$scope.chats = ChatService.getChats();
})

.controller('ChatDetailsCtrl', function($scope,  $stateParams, ChatService) {
$scope.chatId = $stateParams.chatId;
 $scope.chat = ChatService.getChat($scope.chatId);
})
.config(function($stateProvider, $urlRouterProvider) {

 $stateProvider
   .state('chats', {
     url: "/chats",
     templateUrl: "templates/chats.html",
     controller: "ChatsCtrl"
   })
   .state('chatDetails', {
     url: "/chats/:chatId",
     templateUrl: "templates/chatDetails.html",
     controller: "ChatDetailsCtrl"
   });

 $urlRouterProvider.otherwise("/chats");
})
.service('ChatService', function() {
 return {
   chats: [
     {
       id: "1",
       message: "Chat Message 1"
     },
     {
       id: "2",
       message: "Chat Message 2"
     },
     {
       id: "3",
       message: "Chat Message 3"
     },
     {
       id: "4",
       message: "Chat Message 4"
     },
     {
       id: "5",
       message: "Chat Message 5"
     }
   ],
   getChats: function() {
     return this.chats;
   },
   getChat: function(chatId) {
     for(i=0;i<this.chats.length;i++){
       if(this.chats[i].id == chatId){
         return this.chats[i];
       }
     }
   }
 }
})
