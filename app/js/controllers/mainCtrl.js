function MainCtrl(scp, frListingService){

    frListingService.getListings().then(function(listings) {
        scp.listings = listings;
    });

    
}

angular.module("frApp").controller('mainCtrl', ['$scope', 'frListingService', MainCtrl]);
