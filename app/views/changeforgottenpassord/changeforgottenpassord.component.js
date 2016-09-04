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
var error_service_1 = require("../../globals/services/error.service");
var router_1 = require('@angular/router');
var ChangeforgottenpassordComponent = (function () {
    function ChangeforgottenpassordComponent(_APIService, _HtmlcontentsService, _ErrorService, _ActivatedRoute) {
        this._APIService = _APIService;
        this._HtmlcontentsService = _HtmlcontentsService;
        this._ErrorService = _ErrorService;
        this._ActivatedRoute = _ActivatedRoute;
        this.toolbarshow = false;
        this.editorshow = false;
        this.currentUser = {
            password: '',
            password2: '',
            reminder: ''
        };
        this.currentUser.reminder = this._ActivatedRoute.snapshot.params['id'];
    }
    ChangeforgottenpassordComponent.prototype.onToolbarLeave = function (event) {
        this.toolbarshow = false;
    };
    ChangeforgottenpassordComponent.prototype.onChangeView = function (viewMode) {
        this.editorshow = (viewMode == 'edit') ? true : false;
    };
    ChangeforgottenpassordComponent.prototype.onValueChanged = function (content) {
        this._HtmlcontentsService.contents.changeforgottenpassord.content = content;
    };
    ChangeforgottenpassordComponent.prototype.saveContent = function () {
        this._HtmlcontentsService.setContent(this._HtmlcontentsService.contents.changeforgottenpassord.id, this._HtmlcontentsService.contents.changeforgottenpassord.content);
        this.editorshow = false;
    };
    ChangeforgottenpassordComponent.prototype.onSendNewPassword = function () {
        var _this = this;
        this._APIService.getResponsePUT('api/user/forgottenpasswordrchange', this.currentUser).subscribe(function (data) {
            _this._ErrorService.errorClear();
            if (data.message) {
                var error = {
                    type: error_service_1.MessageTypes.mtDanger,
                    msg: data.message.errors
                };
                _this._ErrorService.setErrorMsg(error);
            }
            else
                alert('Jelentkezzen be az �j jelszav�val!');
        }, function (error) {
            console.log(error);
        });
    };
    ChangeforgottenpassordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-changeforgottenpassord',
            templateUrl: 'changeforgottenpassord.component.html',
            styleUrls: ['changeforgottenpassord.component.css'],
            directives: [hunkhtml_directive_1.Hunkhtml, ckeditor_component_1.CkeditorComponent, hunk_toolbar_component_component_1.HunkToolbarComponentComponent],
            providers: [API_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [API_service_1.APIService, htmlcontents_service_1.HtmlcontentsService, error_service_1.ErrorService, router_1.ActivatedRoute])
    ], ChangeforgottenpassordComponent);
    return ChangeforgottenpassordComponent;
}());
exports.ChangeforgottenpassordComponent = ChangeforgottenpassordComponent;
//# sourceMappingURL=changeforgottenpassord.component.js.map