angular.module('frApp').filter('imgResize', function() {
    return function(input) {
        return input.replace(/^(.*)(\d{15})(\d{1}\.\w{3})$/, '$1' +'040002009900600' + '$3');
    }
})
