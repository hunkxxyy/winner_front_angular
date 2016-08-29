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
var error_service_1 = require("../../../globals/services/error.service");
var API_service_1 = require("../../../globals/services/API.service");
var auth_service_1 = require("../../../globals/services/auth.service");
var multipart_item_1 = require("../../../utils/multipart-upload/multipart-item");
var multipart_uploader_1 = require("../../../utils/multipart-upload/multipart-uploader");
var global_constats_1 = require("../../../utils/global.constats");
var URL = global_constats_1.globals.backendIp + 'api/ckeditor/fileupload';
var FileUploaderComponent = (function () {
    function FileUploaderComponent(_ErrorService, _ApiService, _AuthService) {
        var _this = this;
        this._ErrorService = _ErrorService;
        this._ApiService = _ApiService;
        this._AuthService = _AuthService;
        this.uploader = new multipart_uploader_1.MultipartUploader({ url: URL });
        this.multipartItem = new multipart_item_1.MultipartItem(this.uploader);
        this.host = global_constats_1.globals.backendIp;
        this.PATH = ''; //A szerverena kép gyökér utvonala
        this.INDEX = ''; //a képlita indexe, ezek töltődnek be
        this.imageList = [];
        this.uploadCallback = function (data) {
            _this.file = null;
            if (data) {
                _this.loadImageList();
            }
            else {
                console.error("home.ts & uploadCallback() upload file false.");
            }
        };
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
        this.loadImageList();
    };
    FileUploaderComponent.prototype.loadImageList = function () {
        var _this = this;
        this._ApiService.getResponseGET('api/ckeditor/images/' + this.INDEX, '').subscribe(function (data) {
            _this.imageList = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    FileUploaderComponent.prototype.onKepfeltoltes = function ($event) {
        // console.log('uj file');
        var inputValue = $event.target;
        if (null == inputValue || null == inputValue.files[0]) {
            //  console.debug("Input file error.");
            return;
        }
        else {
            this.file = inputValue.files[0];
            // console.debug("Input File name: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
            this.upload();
        }
    };
    FileUploaderComponent.prototype.upload = function () {
        if (null == this.file) {
            console.error("home.ts & upload() form invalid.");
            return;
        }
        if (this.multipartItem == null) {
            this.multipartItem = new multipart_item_1.MultipartItem(this.uploader);
        }
        if (this.multipartItem.formData == null)
            this.multipartItem.formData = new FormData();
        this.multipartItem.formData.append("file", this.file);
        this.multipartItem.formData.append("PATH", this.PATH);
        this.multipartItem.formData.append("INDEX", this.INDEX);
        this.multipartItem.formData.append("filename", this.filename);
        this.multipartItem.formData.append("params", JSON.stringify(this.imgParams));
        this.multipartItem.formData.append("access_token", this._AuthService.user.access_token);
        this.multipartItem.callback = this.uploadCallback;
        this.multipartItem.upload();
    };
    FileUploaderComponent.prototype.hint = function () {
        alert('A képed egérrel húzd át a szerkesztőbe!');
    };
    FileUploaderComponent.prototype.deletePicture = function (pic) {
        var _this = this;
        var txt;
        var r = confirm("Biztosan törlöd a képet?");
        if (r == true) {
            this._ApiService.getResponsePUT('api/ckeditor/filedelete/' + pic.id, { akarmi: 'aní' }).subscribe(function (data) {
                console.log(data);
                _this.loadImageList();
            }, function (error) {
                console.log(error);
            });
        }
        else {
        }
    };
    ;
    FileUploaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-file-uploader',
            templateUrl: 'file-uploader.component.html',
            styleUrls: ['file-uploader.component.css'],
            inputs: ['PATH', 'INDEX', 'imgParams'],
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService, auth_service_1.AuthService])
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());
exports.FileUploaderComponent = FileUploaderComponent;
//# sourceMappingURL=file-uploader.component.js.map