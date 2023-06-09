var xpr_objects = require("/xpr/request");
var stripe_utils = require("SimpleStripe/Stripe"); 
var analytics = require("XprObjects/XprAnalytics");

exports.process = function(context, options) {


}
function process(){
    let request = xpr_objects.XprRequest();
    var api = xpr_objects.XprApi;
    

	//analytics.trackSearch(request.urlParams.q, 'test','test');	
    return 1;
}