// var xpr_objects = require("/xpr/request");
// var analytics = require("XprObjects/XprAnalytics");

// require('/xpr/utilities');
var utils = require('/xpr/utilities');
exports.process = function(context, options) {
	PHP.XprConsole("Test from bundle test from main");		
   	 utils.XprConsole.log('Test hello');
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
