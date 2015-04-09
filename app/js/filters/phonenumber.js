/*
{
  "type": "Mobile",
  "number": 3373990,
  "area_code": 866,
  "extension": null,
  "description": "Mobile Provisioned Tracking Number",
  "tracked": true
}
*/

angular.module('frApp').filter('phonenumber', function() {
    console.log('Instiating phonenumber');
    return function(input, skipCountryCode) {
        var num = input.area_code + '-' + input.number;
        if(!skipCountryCode) {
            num = '+1-'+ num;
        }
        return num;
    }
})
