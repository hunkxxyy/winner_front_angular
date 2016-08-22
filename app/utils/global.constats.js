"use strict";
var globals = (function () {
    function globals() {
    }
    Object.defineProperty(globals, "backendIp", {
        get: function () {
            return (window.location.hostname == 'localhost') ? 'http://winner-back/' : 'http://winnerfront.oxhungary.hu/';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(globals, "client_secret", {
        //public static get backendIp(): string { return 'http://winnerfront.oxhungary.hu/' }
        get: function () { return 'winner'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(globals, "client_id", {
        get: function () { return '2'; },
        enumerable: true,
        configurable: true
    });
    return globals;
}());
exports.globals = globals;
//# sourceMappingURL=global.constats.js.map