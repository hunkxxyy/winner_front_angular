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
var API_service_1 = require('../../globals/services/API.service');
var hunkhtml_directive_1 = require('../../directives/hunkhtml.directive');
var ckeditor_component_1 = require('../../components/ckeditor/ckeditor.component');
var htmlcontents_service_1 = require('../../globals/services/htmlcontents.service');
var hunk_toolbar_component_component_1 = require('../../components/hunk-toolbar-component/hunk-toolbar-component.component');
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(_APIService, _HtmlcontentsService) {
        this._APIService = _APIService;
        this._HtmlcontentsService = _HtmlcontentsService;
        this.toolbarshow = false;
        this.editorshow = false;
    }
    ForgotPasswordComponent.prototype.sendReminderMail = function (email) {
        this._APIService.getResponseGET('api/user/passwordreminder/' + email, '').subscribe(function (data) {
            alert('Az email ki lett k�ldve!');
        }, function (error) {
            console.log(error);
        });
    };
    ForgotPasswordComponent.prototype.onToolbarLeave = function (event) {
        this.toolbarshow = false;
    };
    ForgotPasswordComponent.prototype.onChangeView = function (viewMode) {
        this.editorshow = (viewMode == 'edit') ? true : false;
    };
    ForgotPasswordComponent.prototype.onValueChanged = function (content) {
        this._HtmlcontentsService.contents.forgotpass.content = content;
    };
    ForgotPasswordComponent.prototype.saveContent = function () {
        this._HtmlcontentsService.setContent(this._HtmlcontentsService.contents.forgotpass.id, this._HtmlcontentsService.contents.forgotpass.content);
        this.editorshow = false;
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-forgot-password',
            templateUrl: 'forgot-password.component.html',
            styleUrls: ['forgot-password.component.css'],
            directives: [hunkhtml_directive_1.Hunkhtml, ckeditor_component_1.CkeditorComponent, hunk_toolbar_component_component_1.HunkToolbarComponentComponent],
            providers: [API_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [API_service_1.APIService, htmlcontents_service_1.HtmlcontentsService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot-password.component.js.map