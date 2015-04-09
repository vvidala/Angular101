angular.module("frApp").controller('mainCtrl', function($scope, $http){
    $http.get('/snippets/js/listings.json').then(function(response) {
        $scope.listings = response.data;
    })
});
