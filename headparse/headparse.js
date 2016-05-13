app.controller("headparseCtrl", function($scope, $http) {
  $scope.buttonMessage = "Click Here for Cool Info";
  $scope.api = "https://headerms2.herokuapp.com/"

  $scope.headers={};

  $scope.getHeader = function(){
    $scope.buttonMessage = "Working...";
  	$http.get($scope.api).then(function(response) {
      $scope.buttonMessage = "Click Here for Cool Info";
  		console.log(JSON.stringify(response));
      $scope.headers = response.data;
  	}, function(error) {
      $scope.buttonMessage = "Click Here for Cool Info";
  		console.log(error);
  	})
  };

 });