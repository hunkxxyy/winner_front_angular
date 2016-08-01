"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var app_routes_1 = require('./app/app.routes');
var common_1 = require('@angular/common');
var http_1 = require("@angular/http");
var functions_service_1 = require("./app/globals/services/functions.service");
var auth_service_1 = require("./app/globals/services/auth.service");
var error_service_1 = require("./app/globals/services/error.service");
if (_1.environment.production) {
    /*ez most developer modban van,*/ core_1.enableProdMode();
}
/*ez most éles,*/ core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    app_routes_1.APP_ROUTES_PROVIDER,
    http_1.HTTP_PROVIDERS,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
    auth_service_1.AuthService,
    error_service_1.ErrorService,
    functions_service_1.Functions
]);
//# sourceMappingURL=main.js.map