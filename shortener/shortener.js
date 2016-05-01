app.controller("shortenerCtrl", function($scope, $http) {
  $scope.api = "https://url-shortjoehill.herokuapp.com/urls/"

  $scope.message = "Hello Shortener"
  $scope.inputUrl = "";
  $scope.shortCode = "";
  $scope.errorFlag = false;

  $scope.createUrl = function(fullUrl){
  	$scope.errorFlag = false;
  	$http.get($scope.api + "new?fullUrl=" + fullUrl).then(function(response) {
  		console.log(JSON.stringify(response));
  		$scope.shortCode = response.data.shortUrl;
  	}, function(error) {
  		$scope.errorFlag = true;
  		console.log(error);
  	})
  };

});


//Regex thankfully obtained from this gist: https://gist.github.com/dperini/729294
    // var regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
    


//Writing
// https://url-shortjoehill.herokuapp.com/urls/new?fullUrl=http://test.com

//Retrieving
// https://url-shortjoehill.herokuapp.com/urls/data.shortener