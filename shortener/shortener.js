app.controller("shortenerCtrl", function($scope, $http) {
  $scope.api = "https://url-shortjoehill.herokuapp.com/urls/"

  $scope.message = "Hello Shortener"
  $scope.inputUrl = "";
  $scope.shortCode = "";

  $scope.createUrl = function(fullUrl){
  	$http.get($scope.api + "new?fullUrl=" + fullUrl).then(function(response) {
  		console.log(JSON.stringify(response));
  		$scope.shortCode = response.data.shortUrl;
  	}, function(error) {
  		console.log(error);
  	})
  };

});




//Writing
// https://url-shortjoehill.herokuapp.com/urls/new?fullUrl=http://test.com

//Retrieving
// https://url-shortjoehill.herokuapp.com/urls/data.shortener