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
var hunkRichTexteditor_component_1 = require('../../components/hunk-richtexteditor/hunkRichTexteditor.component');
var API_service_1 = require('../../globals/services/API.service');
var error_service_1 = require('../../globals/services/error.service');
var htmlcontents_service_1 = require('../../globals/services/htmlcontents.service');
var hunk_toolbar_component_component_1 = require('../../components/hunk-toolbar-component/hunk-toolbar-component.component');
var hunkhtml_directive_1 = require('../../directives/hunkhtml.directive');
var ckeditor_component_1 = require('../../components/ckeditor/ckeditor.component');
var KapcsolatComponent = (function () {
    function KapcsolatComponent(_HtmlcontentsService, _APIService, _ErrorService) {
        this._HtmlcontentsService = _HtmlcontentsService;
        this._APIService = _APIService;
        this._ErrorService = _ErrorService;
        this.toolbar1show = false;
        this.editor1show = false;
        this.toolbar2show = false;
        this.editor2show = false;
        this.content = { name: '', phone: '', email: '', comments: '' };
    }
    KapcsolatComponent.prototype.onToolbar1Leave = function (event) {
        this.toolbar1show = false;
    };
    KapcsolatComponent.prototype.onToolbar2Leave = function (event) {
        this.toolbar2show = false;
    };
    KapcsolatComponent.prototype.onChange1View = function (viewMode) {
        this.editor1show = (viewMode == 'edit') ? true : false;
    };
    KapcsolatComponent.prototype.onChange2View = function (viewMode) {
        this.editor2show = (viewMode == 'edit') ? true : false;
    };
    KapcsolatComponent.prototype.onValueChanged1 = function (content) {
        this._HtmlcontentsService.contents.kapcsolat1.content = content;
    };
    KapcsolatComponent.prototype.onValueChanged2 = function (content) {
        this._HtmlcontentsService.contents.kapcsolat2.content = content;
    };
    KapcsolatComponent.prototype.save1Content = function () {
        this._HtmlcontentsService.setContent(this._HtmlcontentsService.contents.kapcsolat1.id, this._HtmlcontentsService.contents.kapcsolat1.content);
        this.editor1show = false;
    };
    KapcsolatComponent.prototype.save2Content = function () {
        this._HtmlcontentsService.setContent(this._HtmlcontentsService.contents.kapcsolat2.id, this._HtmlcontentsService.contents.kapcsolat2.content);
        this.editor2show = false;
    };
    KapcsolatComponent.prototype.sendMessage = function () {
        var _this = this;
        this._APIService.getResponse('api/kapcsolat/email/', this.content).subscribe(function (data) {
            _this._ErrorService.errorClear();
            if (data.success) {
                _this.content = { name: '', phone: '', email: '', comments: '' };
                var error = {
                    type: error_service_1.MessageTypes.mtSuccess,
                    msg: [data.success]
                };
                _this._ErrorService.setErrorMsg(error);
            }
            console.log(data);
            if (data.message) {
                var error = {
                    type: error_service_1.MessageTypes.mtDanger,
                    msg: data.message.errors
                };
                _this._ErrorService.setErrorMsg(error);
            }
        }, function (error) {
            console.log(error);
        });
    };
    KapcsolatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-kapcsolat',
            templateUrl: 'kapcsolat.component.html',
            styleUrls: ['kapcsolat.component.css'],
            directives: [hunkRichTexteditor_component_1.HunkRichTextComponent, hunkhtml_directive_1.Hunkhtml, ckeditor_component_1.CkeditorComponent, hunk_toolbar_component_component_1.HunkToolbarComponentComponent],
            providers: [API_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [htmlcontents_service_1.HtmlcontentsService, API_service_1.APIService, error_service_1.ErrorService])
    ], KapcsolatComponent);
    return KapcsolatComponent;
}());
exports.KapcsolatComponent = KapcsolatComponent;
//# sourceMappingURL=kapcsolat.component.js.map