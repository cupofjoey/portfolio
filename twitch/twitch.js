var users = ["freecodecamp", "storbeck","terakilobyte", "thomasballinger","noobs2ninjas","beohoff", "esl_sc2", "bul_weif", "drdisrespectlive"];
//I threw in my own Twitch Account, "bul_weif" for the heck of it. //
var api = 'https://api.twitch.tv/kraken/streams/';

app.controller("twitchCtrl", function($scope, $http) {
  $scope.results = [];
   
  var getUsername = function(url) {
    var pieces = url.split("/");
    return pieces[pieces.length - 1];
  }
    
  $scope.user;
  for(var i = 0; i < users.length; i++) {
    user = users[i];
    $http.get(api + user)
    .success(function(data){
      var url = data._links.self;
      
      var user = getUsername(url);
      console.log(user);
      
      data.user = user;
      $scope.results.push(data);
    })
    .error(function(errorObject){
      var message = errorObject.message;
      var myPieces = message.split("'");
      var user = myPieces[1];
      errorObject.user = user;
      $scope.results.push(errorObject);
    })
  }  
});