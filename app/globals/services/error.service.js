"use strict";
(function (MessageTypes) {
    MessageTypes[MessageTypes["mtSuccess"] = 0] = "mtSuccess";
    MessageTypes[MessageTypes["mtInfo"] = 1] = "mtInfo";
    MessageTypes[MessageTypes["mtWarning"] = 2] = "mtWarning";
    MessageTypes[MessageTypes["mtDanger"] = 3] = "mtDanger";
})(exports.MessageTypes || (exports.MessageTypes = {}));
var MessageTypes = exports.MessageTypes;
var ErrorService = (function () {
    function ErrorService() {
        this._debugMsg = new Array();
        this._errorMsg = new Array();
        this.debuggerVisible = false;
    }
    ErrorService.prototype.getErrorMsg = function () {
        return this._errorMsg;
    };
    ErrorService.prototype.setErrorMsg = function (msg) {
        //   console.log(msg);
        // this.errorClear();
        //if (succesError!=this.errorSucces) this.errorClear();
        this.messageType = msg.type;
        this.errorClear();
        this._errorMsg = msg.msg;
        //  console.log(msg.msg.length);
        /* console.log('error service msg:');
         console.log(msg);*/
    };
    ErrorService.prototype.getdDebugMsg = function () {
        return this._debugMsg;
    };
    ErrorService.prototype.setDebugmSG = function (msg) {
        this._debugMsg.push(msg);
    };
    ErrorService.prototype.debugClear = function () {
        this._debugMsg = [];
    };
    ErrorService.prototype.errorClear = function () {
        this._errorMsg = [];
    };
    return ErrorService;
}());
exports.ErrorService = ErrorService;
//# sourceMappingURL=error.service.js.map