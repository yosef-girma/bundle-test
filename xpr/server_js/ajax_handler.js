var utils = require('/xpr/utilities');
exports.process = function(context, options) {
     PHP.XprConsole("Test logging from bundle test");
     utils.XprConsole.log("Test logging");
    return "ajaxHandler from bundle test one, updating the content";
}
