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
var API_service_1 = require("../../globals/services/API.service");
var auth_service_1 = require("../../globals/services/auth.service");
var AdminViewComponent = (function () {
    function AdminViewComponent(_errorService, _AuthService) {
        this._errorService = _errorService;
        this._AuthService = _AuthService;
    }
    ;
    AdminViewComponent.prototype.onCheck = function (ch) {
        this._errorService.debuggerVisible = ch;
    };
    ;
    AdminViewComponent.prototype.onLanguageSelect = function (val) {
        //   console.log(val);
    };
    AdminViewComponent.prototype.ngOnInit = function () {
    };
    AdminViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-view',
            template: "\n<div class=\"container-fluid \">\n        <div class=\"row\">\n        <header>\n            <div class=\"col-md-4 headCol\">\n                <div class=\"head-labels\"> Ingatlanok list\u00E1ja</div>\n            </div>\n            <div class=\"col-md-4 headCol\">\n                <div class=\"head-labels\"> Ingatlanok list\u00E1ja</div>\n            </div>\n            <div class=\"col-md-4 headCol\">\n                <div class=\"head-labels\"> Ingatlanok list\u00E1ja</div>\n            </div>\n                </header>\n    </div>\n  <router-outlet></router-outlet>\n</div>\n    ",
            styleUrls: ["admin.css"],
            directives: [],
            providers: [API_service_1.APIService],
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, auth_service_1.AuthService])
    ], AdminViewComponent);
    return AdminViewComponent;
}());
exports.AdminViewComponent = AdminViewComponent;
//# sourceMappingURL=admin.component.js.map