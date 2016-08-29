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
var ng2_ckeditor_1 = require('ng2-ckeditor');
var file_uploader_component_1 = require('../ckeditor/file-uploader/file-uploader.component');
var CkeditorComponent = (function () {
    function CkeditorComponent() {
        this.fileUploader = false;
        this.imagelistShow = false;
        this.valueChanged = new core_1.EventEmitter();
    }
    CkeditorComponent.prototype.editorReady = function (event) {
        console.log('ready');
        console.log(event);
    };
    CkeditorComponent.prototype.change = function (event) {
        this.valueChanged.emit(event);
    };
    CkeditorComponent.prototype.ngOnInit = function () {
    };
    CkeditorComponent.prototype.onSubmitModelForm = function (form) {
        console.log(form);
    };
    CkeditorComponent.prototype.onSubmitTemplateForm = function (form) {
        console.log(form);
    };
    CkeditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-ckeditor',
            templateUrl: 'ckeditor.component.html',
            styleUrls: ['ckeditor.component.css'],
            directives: [ng2_ckeditor_1.CKEditor, file_uploader_component_1.FileUploaderComponent],
            outputs: ['valueChanged'],
            inputs: ['htmlValue', 'fileUploader', 'PATH', 'INDEX', 'imgParams'],
        }), 
        __metadata('design:paramtypes', [])
    ], CkeditorComponent);
    return CkeditorComponent;
}());
exports.CkeditorComponent = CkeditorComponent;
//# sourceMappingURL=ckeditor.component.js.map