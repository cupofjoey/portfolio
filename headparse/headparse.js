app.controller("headparseCtrl", function($scope, $http) {
  $scope.api = "https://headerms2.herokuapp.com/"

  $scope.headers={};

  $scope.getHeader = function(){
  	$http.get($scope.api).then(function(response) {
  		console.log(JSON.stringify(response));
      $scope.headers = response.data;
  	}, function(error) {
  		console.log(error);
  	})
  };

 });