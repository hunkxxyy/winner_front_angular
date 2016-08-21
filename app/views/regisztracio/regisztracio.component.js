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
var global_constats_1 = require("../../utils/global.constats");
var auth_service_1 = require('../../globals/services/auth.service');
var hunkRichTexteditor_component_1 = require('../../components/hunk-richtexteditor/hunkRichTexteditor.component');
var htmlcontents_service_1 = require('../../globals/services/htmlcontents.service');
var RegisztracioViewComponent = (function () {
    function RegisztracioViewComponent(_ErrorService, _APIService, _AuthService, _HtmlcontentsService) {
        this._ErrorService = _ErrorService;
        this._APIService = _APIService;
        this._AuthService = _AuthService;
        this._HtmlcontentsService = _HtmlcontentsService;
        this.currentUser = { name: '', email: '', password: '' };
        this.submitButtonCaption = 'Regisztráció';
    }
    ;
    RegisztracioViewComponent.prototype.onRegiser = function () {
        var _this = this;
        this._APIService.getResponse('api/user/', this.currentUser).subscribe(function (data) {
            console.log(data);
            _this._ErrorService.errorClear();
            if (data.message) {
                var error = {
                    type: error_service_1.MessageTypes.mtDanger,
                    msg: data.message.errors
                };
                _this._ErrorService.setErrorMsg(error);
            }
            else
                _this.login();
        }, function (error) {
            console.log(error);
        });
    };
    RegisztracioViewComponent.prototype.login = function () {
        var _this = this;
        var loginAs = {
            grant_type: this._AuthService.grantType(),
            client_id: global_constats_1.globals.client_id,
            client_secret: global_constats_1.globals.client_secret,
            username: this.currentUser.email,
            password: this.currentUser.password
        };
        this._APIService.getResponse('oauth/acces_token', loginAs).subscribe(function (data) {
            console.log(data);
            if (data.msg == 'login success') {
                _this._AuthService.setUser({ access_token: data.oauth.access_token });
                // window.location.href += "#/ingatlanok";
                window.location.reload();
            }
        });
    };
    RegisztracioViewComponent.prototype.ngOnInit = function () {
        if (this._AuthService.logged)
            window.location.href = "#/ingatlanok";
    };
    RegisztracioViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'regisztracio-view',
            templateUrl: 'htmls/regisztracio.html',
            providers: [API_service_1.APIService],
            directives: [hunkRichTexteditor_component_1.HunkRichTextComponent]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService, auth_service_1.AuthService, htmlcontents_service_1.HtmlcontentsService])
    ], RegisztracioViewComponent);
    return RegisztracioViewComponent;
}());
exports.RegisztracioViewComponent = RegisztracioViewComponent;
//# sourceMappingURL=regisztracio.component.js.map