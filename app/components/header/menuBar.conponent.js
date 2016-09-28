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
var midleBar_component_1 = require('./midleBar.component');
var API_service_1 = require('../../globals/services/API.service');
var auth_service_1 = require('../../globals/services/auth.service');
var global_constats_1 = require("../../utils/global.constats");
var MenuBarComponent = (function () {
    function MenuBarComponent(_APIService, _AuthService) {
        this._APIService = _APIService;
        this._AuthService = _AuthService;
        this.showSale = false;
        this.loginDropdownOpen = false;
        this.logged = false;
        this.email = '';
        this.password = '';
    }
    MenuBarComponent.prototype.onMouseOut = function (event) {
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e == this) {
            return;
        }
        console.log(e.nodeType);
        // handle mouse eve
    };
    MenuBarComponent.prototype.openLoginPanel = function () {
        this.loginDropdownOpen = !this.loginDropdownOpen;
    };
    MenuBarComponent.prototype.login = function () {
        var _this = this;
        var loginAs = {
            grant_type: this._AuthService.grantType(),
            client_id: global_constats_1.globals.client_id,
            client_secret: global_constats_1.globals.client_secret,
            username: this.email,
            password: this.password
        };
        this._APIService.getResponse('oauth/acces_token', loginAs).subscribe(function (data) {
            console.log(data);
            if (data.msg == 'login success') {
                //this.reloadMenu(data.oauth.access_token);
                _this.logged = _this._AuthService.setUser({
                    access_token: data.oauth.access_token
                });
                _this.reloadMenu();
                _this.setUserType();
            }
        }, function (error) {
            _this.logged = _this._AuthService.userDestroy();
            _this.reloadMenu();
        });
    };
    MenuBarComponent.prototype.setUserType = function () {
        var _this = this;
        this._APIService.getResponseGET('oauth/usertype/', '').subscribe(function (data) {
            _this._AuthService.setUserType(data);
        }, function (error) {
            console.log(error);
        });
    };
    MenuBarComponent.prototype.logOut = function () {
        var _this = this;
        this._APIService.logOut().subscribe(function (data) {
            console.log(data);
            _this.loginDropdownOpen = false;
            _this.logged = _this._AuthService.userDestroy();
            _this.reloadMenu();
        }, function (error) {
            _this.logged = _this._AuthService.userDestroy();
            _this.reloadMenu();
            console.log(error);
        });
    };
    MenuBarComponent.prototype.reloadMenu = function () {
        var _this = this;
        this._APIService.getMenus(this.logged)
            .subscribe(function (data) {
            console.log(data);
            _this.middleMenus = data.menuArr;
        }, function (error) {
            /*   console.log(error);
           this._AuthService.userDestroy();
             this.reloadMenu();*/
        });
    };
    MenuBarComponent.prototype.ngOnInit = function () {
        this.logged = this._AuthService.logged;
        this.reloadMenu();
    };
    MenuBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu-bar',
            templateUrl: 'htmls/statusbar.html',
            styleUrls: ["css/header.css"],
            directives: [router_1.ROUTER_DIRECTIVES, midleBar_component_1.MiddleBar],
            providers: [API_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [API_service_1.APIService, auth_service_1.AuthService])
    ], MenuBarComponent);
    return MenuBarComponent;
}());
exports.MenuBarComponent = MenuBarComponent;
//# sourceMappingURL=menuBar.conponent.js.map