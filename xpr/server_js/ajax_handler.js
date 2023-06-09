var xpr_objects = require("/xpr/request");
var analytics = require("XprObjects/XprAnalytics");

exports.process = function(context, options) {


    return "ajaxHandler";
}
function process(){
    let request = xpr_objects.XprRequest();
    var api = xpr_objects.XprApi;
    

	//analytics.trackSearch(request.urlParams.q, 'test','test');	
    return 1;
}