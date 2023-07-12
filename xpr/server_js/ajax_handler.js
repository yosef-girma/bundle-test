var xpr_objects = require("/xpr/request");
var analytics = require("XprObjects/XprAnalytics");

exports.process = function(context, options) {

    XprConsole.log('Test from console log');
    return { 
        "message": "Hello world"
    }

}
// function process(){

	
//  //    let request = xpr_objects.XprRequest();
//  //    var api = xpr_objects.XprApi;
    

// 	// //analytics.trackSearch(request.urlParams.q, 'test','test');	
//  //    return 1;
// }
