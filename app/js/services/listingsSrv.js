function ListingsSrv ($http, $q) {
    return {
        getListings: function() {
            var defer = $q.defer();

            $http.get('/snippets/js/listings.json').then(function(response) {
                defer.resolve(response.data);
            });

            return defer.promise;
        }
    }
}

angular.module('frApp').service('frListingService', ['$http', '$q', ListingsSrv])
