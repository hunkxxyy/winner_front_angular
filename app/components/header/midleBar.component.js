"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var error_service_1 = require("../../globals/services/error.service");
var API_service_1 = require('../../globals/services/API.service');
var router_1 = require('@angular/router');
var MiddleBar = (function () {
    function MiddleBar(_ErrorService, _ApiService) {
        this._ErrorService = _ErrorService;
        this._ApiService = _ApiService;
        this.bannerShow = false;
    }
    ;
    MiddleBar = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'middle-bar',
            templateUrl: 'htmls/midlebar.html',
            styleUrls: [""],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [API_service_1.APIService, error_service_1.ErrorService],
            inputs: ['menus']
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService])
    ], MiddleBar);
    return MiddleBar;
}());
exports.MiddleBar = MiddleBar;
//# sourceMappingURL=midleBar.component.js.map