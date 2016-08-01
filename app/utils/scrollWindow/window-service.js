"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var browser_1 = require('@angular/platform-browser/src/facade/browser');
var exceptions_1 = require('@angular/platform-browser/src/facade/exceptions');
function _window() {
    return browser_1.window;
}
var WINDOW = (function () {
    function WINDOW() {
    }
    Object.defineProperty(WINDOW.prototype, "nativeWindow", {
        get: function () {
            return exceptions_1.unimplemented();
        },
        enumerable: true,
        configurable: true
    });
    return WINDOW;
}());
exports.WINDOW = WINDOW;
var WindowRef_ = (function (_super) {
    __extends(WindowRef_, _super);
    function WindowRef_() {
        _super.call(this);
    }
    Object.defineProperty(WindowRef_.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef_;
}(WINDOW));
exports.WINDOW_PROVIDERS = [
    new core_1.Provider(WINDOW, { useClass: WindowRef_ }),
];
//# sourceMappingURL=window-service.js.map