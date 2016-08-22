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
var hunkRichTexteditor_component_1 = require('../../components/hunk-richtexteditor/hunkRichTexteditor.component');
var htmlcontents_service_1 = require('../../globals/services/htmlcontents.service');
var AdataimViewComponent = (function () {
    function AdataimViewComponent(_ErrorService, _APIService, _HtmlcontentsService) {
        this._ErrorService = _ErrorService;
        this._APIService = _APIService;
        this._HtmlcontentsService = _HtmlcontentsService;
        this.currentUser = { name: '', email: '', password: '' };
        this.submitButtonCaption = 'Adatok módosítása';
    }
    ;
    AdataimViewComponent.prototype.onRegiser = function () {
        var _this = this;
        this._APIService.getResponsePUT('api/currentuser/modify/', this.currentUser).subscribe(function (data) {
            _this._ErrorService.errorClear();
            if (data.message)
                _this._ErrorService.setErrorMsg(data.message.errors);
            else {
            }
        }, function (error) {
            console.log(error);
        });
    };
    AdataimViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._APIService.getResponseGET('api/currentuser/', this.currentUser).subscribe(function (data) {
            console.log(data);
            _this.currentUser = data;
        }, function (error) {
            console.log(error);
        });
    };
    AdataimViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '../regisztracio/htmls/regisztracio.html',
            selector: 'adataim-view',
            providers: [API_service_1.APIService],
            directives: [hunkRichTexteditor_component_1.HunkRichTextComponent]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService, htmlcontents_service_1.HtmlcontentsService])
    ], AdataimViewComponent);
    return AdataimViewComponent;
}());
exports.AdataimViewComponent = AdataimViewComponent;
//# sourceMappingURL=adataim.component.js.map