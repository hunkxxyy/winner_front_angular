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
var ckeditor_component_1 = require('../../components/ckeditor/ckeditor.component');
var hunk_toolbar_component_component_1 = require('../../components/hunk-toolbar-component/hunk-toolbar-component.component');
var hunkhtml_directive_1 = require('../../directives/hunkhtml.directive');
var htmlcontents_service_1 = require('../../globals/services/htmlcontents.service');
var router_1 = require('@angular/router');
var EditableViewComponent = (function () {
    function EditableViewComponent(_HtmlcontentsService, _ActivatedRoute) {
        var _this = this;
        this._HtmlcontentsService = _HtmlcontentsService;
        this._ActivatedRoute = _ActivatedRoute;
        this.toolbarshow = false;
        this.editorshow = false;
        this.content = '';
        this.currentContent = '**';
        this.subscription = this._ActivatedRoute.params.subscribe(function (param) { return _this.currentContent = param['id']; });
    }
    EditableViewComponent.prototype.onToolbarLeave = function (event) {
        this.toolbarshow = false;
    };
    EditableViewComponent.prototype.onValueChanged = function (content) {
        this._HtmlcontentsService.contents[this.currentContent].content = content;
    };
    EditableViewComponent.prototype.onChangeView = function (viewMode) {
        this.editorshow = (viewMode == 'edit') ? true : false;
    };
    EditableViewComponent.prototype.saveContent = function () {
        this._HtmlcontentsService.setContent(this._HtmlcontentsService.contents[this.currentContent].id, this._HtmlcontentsService.contents[this.currentContent].content);
        this.toolbarshow = false;
        this.editorshow = false;
    };
    EditableViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-editable-view',
            templateUrl: 'editable-view.component.html',
            styleUrls: ['editable-view.component.css'],
            directives: [ckeditor_component_1.CkeditorComponent, hunk_toolbar_component_component_1.HunkToolbarComponentComponent, hunkhtml_directive_1.Hunkhtml],
        }), 
        __metadata('design:paramtypes', [htmlcontents_service_1.HtmlcontentsService, router_1.ActivatedRoute])
    ], EditableViewComponent);
    return EditableViewComponent;
}());
exports.EditableViewComponent = EditableViewComponent;
//# sourceMappingURL=editable-view.component.js.map