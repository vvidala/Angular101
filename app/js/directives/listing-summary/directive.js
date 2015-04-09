function ListingSummaryDirective() {
    return {
        scope: {
            listing: '='
        },
        templateUrl: '/app/js/directives/listing-summary/partial.html',
        controller: ['$scope', function($scope) {
            $scope.toggleDetails = function() {
                $scope.detailOpen = !$scope.detailOpen;
            }
        }]
    };
}
angular.module('frApp').directive('listingSummary', [ListingSummaryDirective])


$rootScope

    mainCtrl

        directive
        directive2
        directive3
