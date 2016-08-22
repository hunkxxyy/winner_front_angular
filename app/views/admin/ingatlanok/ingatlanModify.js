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
var header_component_1 = require("./header.component");
var API_service_1 = require("../../../globals/services/API.service");
var auth_service_1 = require("../../../globals/services/auth.service");
var ingatlanDeffault_1 = require("./ingatlanDeffault");
var multipart_item_1 = require("../../../utils/multipart-upload/multipart-item");
var multipart_uploader_1 = require("../../../utils/multipart-upload/multipart-uploader");
var global_constats_1 = require("../../../utils/global.constats");
var ingatlanKep_component_1 = require("./ingatlanKep.component");
var router_1 = require('@angular/router');
var URL = global_constats_1.globals.backendIp + 'api/ingatlan_kepek';
var IngatlanModifyComponent = (function () {
    function IngatlanModifyComponent(_ErrorService, _ApiSrvice, _AuthService, _ActivatedRoute) {
        var _this = this;
        this._ErrorService = _ErrorService;
        this._ApiSrvice = _ApiSrvice;
        this._AuthService = _AuthService;
        this._ActivatedRoute = _ActivatedRoute;
        this.uploader = new multipart_uploader_1.MultipartUploader({ url: URL });
        this.multipartItem = new multipart_item_1.MultipartItem(this.uploader);
        this.ingatlan = new ingatlanDeffault_1.ingatlanDeffault;
        this.uploadCallback = function (data) {
            _this.file = null;
            if (data) {
                // console.log(data);
                _this.refreshKepek();
            }
            else {
                console.error("home.ts & uploadCallback() upload file false.");
            }
        };
    }
    IngatlanModifyComponent.prototype.onKepfeltoltes = function ($event) {
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
    IngatlanModifyComponent.prototype.onKey = function (value) {
        this.kep_nev = value;
        //  this.file.name=value;
    };
    IngatlanModifyComponent.prototype.upload = function () {
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
        this.multipartItem.formData.append("name", this.kep_nev);
        this.multipartItem.formData.append("ingatlan_id", (this.ingatlan.id) ? this.ingatlan.id : 1);
        this.multipartItem.formData.append("access_token", this._AuthService.user.access_token);
        this.multipartItem.callback = this.uploadCallback;
        this.multipartItem.upload();
    };
    ;
    IngatlanModifyComponent.prototype.refreshKepek = function () {
        var _this = this;
        if (this.ingatlan.id > 0) {
            this._ApiSrvice.getResponseGET('api/ingatlan/' + this.ingatlan.id, '')
                .subscribe(function (data) {
                _this.kepek = data.kepek;
                var pos = [];
                data.kepek.forEach(function (obj) {
                    pos.push(obj.pos);
                });
                _this.positions = pos;
            }, function (error) {
            });
        }
        else {
            this._ApiSrvice.getResponseGET('api/ingatlan_kepeks/where=ingatlan_id=1&orderBy=pos', '')
                .subscribe(function (data) {
                _this.kepek = data;
                var pos = [];
                _this.kepek.forEach(function (obj) {
                    pos.push(obj.pos);
                });
                _this.positions = pos;
            }, function (error) {
            });
        }
    };
    IngatlanModifyComponent.prototype.onUpdate = function () {
        var _this = this;
        if (this.ingatlan.id) {
            this._ApiSrvice.getResponsePUT('api/ingatlan/modify/' + this.ingatlan.id, this.ingatlan)
                .subscribe(function (data) {
                if (data.errors) {
                    alert(data.errors);
                }
                else
                    window.location.replace("#/admin/ingatlanok");
            }, function (error) {
            });
        }
        else {
            this._ApiSrvice.getResponse('api/ingatlan/', this.ingatlan)
                .subscribe(function (data) {
                console.log(data);
                if (data.errors) {
                    alert(data.errors);
                }
                else {
                    console.log(data);
                    _this.ingatlan = data.Ingatlan;
                    //this.refreshKepek();
                    window.location.replace("#/admin/ingatlanok");
                }
            }, function (error) {
            });
        }
    };
    IngatlanModifyComponent.prototype.onArchivePic = function ($event) {
        var _this = this;
        this._ApiSrvice.getResponsePUT('api/ingatlan_kepek/archive/' + $event, {})
            .subscribe(function (data) {
            _this.kepek = data.kepek;
            _this.refreshKepek();
        }, function (error) {
        });
    };
    IngatlanModifyComponent.prototype.onRefresh = function ($event) {
        this.refreshKepek();
    };
    IngatlanModifyComponent.prototype.onDelete = function () {
        var r = confirm("Biztosan törlöd az ingatlant?!");
        if (r == true) {
            this._ApiSrvice.getResponsePUT('api/ingatlan/archive/' + this.ingatlan.id, '')
                .subscribe(function (data) {
                window.location.replace("#/admin/ingatlanok");
            }, function (error) {
            });
        }
    };
    IngatlanModifyComponent.prototype.onModifyIt = function ($event) {
        this.modifying = $event;
        //console.log($event);
        var css = 'selected';
        if ($event.cssClass == 'selected')
            css = '';
        this.kepek.forEach(function (obj) {
            obj.cssClass = '';
        });
        $event.cssClass = css;
    };
    IngatlanModifyComponent.prototype.sorsjegydbCalculate = function (ar, sorsjegyar) {
        //   console.log(ar + ', ' + sorsjegyar);
        if (ar > 0 && sorsjegyar > 0) {
            this.sorsjegydb = Math.ceil(ar / sorsjegyar);
        }
        else
            this.sorsjegydb = 0;
    };
    IngatlanModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this._ActivatedRoute.snapshot.params['id'];
        if (url != 'new') {
            this._ApiSrvice.getResponseGET('api/ingatlan/' + url, '')
                .subscribe(function (data) {
                var pos = [];
                _this.ingatlan = data;
                _this.sorsjegydbCalculate(_this.ingatlan.ingatlan_ar, _this.ingatlan.sorsjegy_ar);
                _this.kepek = data.kepek;
                data.kepek.forEach(function (obj) {
                    pos.push(obj.pos);
                });
                _this.positions = pos;
                //console.log(this.kepek);
            }, function (error) {
            });
        }
        else {
            this.refreshKepek();
        }
    };
    IngatlanModifyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ingatlan-modify',
            templateUrl: 'ingatlanModify.html',
            directives: [header_component_1.AdminIngatlanHeaderComponent, ingatlanKep_component_1.ingatlanKepComponent],
            styleUrls: ['ingatlan-modify.css'],
            providers: [API_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService, auth_service_1.AuthService, router_1.ActivatedRoute])
    ], IngatlanModifyComponent);
    return IngatlanModifyComponent;
}());
exports.IngatlanModifyComponent = IngatlanModifyComponent;
//# sourceMappingURL=ingatlanModify.js.map