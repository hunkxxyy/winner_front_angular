/*THIS IS GITINGORED !!!!*/
"use strict";
var globals = (function () {
    function globals() {
    }
    Object.defineProperty(globals, "MS_PARTNER", {
        //public static get backendIp(): string { return 'http://52.58.136.103:8083/'; }
        get: function () {
            return (window.location.hostname == 'localhost') ? 'http://billcity-partner/' : 'http://52.58.136.103:8083/';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(globals, "MS_SETTINGS", {
        get: function () {
            return (window.location.hostname == 'localhost') ? 'http://billcity-settings/' : 'http://52.58.136.103:8082/';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(globals, "MS_ITEMS", {
        get: function () {
            return (window.location.hostname == 'localhost') ? 'http://billcity-items/' : 'http://52.58.136.103:8084/';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(globals, "MS_INVOICES", {
        get: function () {
            return (window.location.hostname == 'localhost') ? 'http://billcity-invoices/' : 'http://52.58.136.103:8085/';
        },
        enumerable: true,
        configurable: true
    });
    return globals;
}());
exports.globals = globals;
//# sourceMappingURL=global.constats.js.map