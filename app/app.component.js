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
var router_1 = require('@angular/router');
var menuBar_conponent_1 = require('./components/header/menuBar.conponent');
var menuBarTopComponent_1 = require('./components/menubar/menuBarTopComponent');
var menuBarDownComponent_1 = require('./components/menubar/menuBarDownComponent');
var footer_component_1 = require('./components/footer/footer.component');
var errorView_components_1 = require("./components/error-view/errorView.components");
var auth_service_1 = require("./globals/services/auth.service");
var error_service_1 = require("./globals/services/error.service");
var AppComponent = (function () {
    function AppComponent(_AuthService, _ErrorService) {
        this._AuthService = _AuthService;
        this._ErrorService = _ErrorService;
    }
    AppComponent.prototype.showErrorMsg = function () {
        return this._ErrorService.getErrorMsg();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [
                errorView_components_1.ErrorView,
                router_1.ROUTER_DIRECTIVES,
                menuBar_conponent_1.MenuBarComponent,
                menuBarTopComponent_1.MenuBarTopComponent,
                menuBarDownComponent_1.MenuBarDownComponent,
                footer_component_1.FooterComponent
            ],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, error_service_1.ErrorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map