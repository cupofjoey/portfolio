app.controller("shortenerCtrl", function($scope, $http) {
  $scope.message = "Hello Shortener!"
  var dummyurl = "https://url-shortjoehill.herokuapp.com/urls/new?fullUrl=http://www.google.com"


  $scope.testFunction = function(){
  	$http.get(dummyurl).then(function(response) {
  		console.log(response);
  	}, function(error) {
  		console.log(error);
  	})
  };

});





// https://url-shortjoehill.herokuapp.com/urls/new?fullUrl=http://test.com