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
var global_constats_1 = require("../../../utils/global.constats");
var ingatlanKepComponent = (function () {
    function ingatlanKepComponent(_ErrorService, _APIService) {
        this._ErrorService = _ErrorService;
        this._APIService = _APIService;
        this.host = global_constats_1.globals.backendIp;
        this.archivePic = new core_1.EventEmitter();
        this.modifyIt = new core_1.EventEmitter();
        this.refresh = new core_1.EventEmitter();
        this.isSelected = false;
    }
    ;
    ingatlanKepComponent.prototype.onArchivePic = function () {
        //  alert('pause');
        this.archivePic.emit(this.kepObj.id);
    };
    ingatlanKepComponent.prototype.onModifyIt = function () {
        this.modifyIt.emit(this.kepObj);
        this.position = this.kepObj.pos;
    };
    ingatlanKepComponent.prototype.update = function () {
        var _this = this;
        //let objectForPost={name:this.kepObj.name};
        this._APIService.getResponsePUT('api/ingatlan_kepek/modify/' + this.kepObj.id, this.kepObj)
            .subscribe(function (data) {
            // this.kepObj.name=data.name;
            _this.refresh.emit(true);
            //this._ErrorService.setErrorMsg(data.msg, true);
        }, function (error) {
            //this._ErrorService.setErrorMsg('Sikertelen bejelentketés!');
        });
    };
    ingatlanKepComponent.prototype.onChangePos = function (event) {
        this.kepObj.pos = event;
    };
    ingatlanKepComponent.prototype.modifyPos = function (value) {
        var _this = this;
        alert(value);
        this._APIService.getResponsePUT('api/ingatlan_kepek/modify/' + this.kepObj.id, { pos: value })
            .subscribe(function (data) {
            _this.onModifyIt();
        }, function (error) {
        });
    };
    ingatlanKepComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ingatlan-kep',
            template: "\n   <div  class=\"{{kepObj.cssClass}}\">\n\n\n       <img (click)=\"onModifyIt()\" src=\"{{host}}{{kepObj.paths.kozepes}}\" alt=\"\"/>\n        <div *ngIf=\"kepObj.cssClass\">\n        <section>\n\n                <label> K\u00E9p neve:</label>\n                <input class=\"textinput\" [(ngModel)]=\"kepObj.name\" >\n </section>\n  <section>\n\n                <label>K\u00E9p poz\u00EDci\u00F3:</label>\n\n                    <select class=\"textinput\" [(ngModel)]=\"position\" #posIndex (change)=\"onChangePos(posIndex.value)\">\n                            <option *ngFor=\"let pos of positions, let i=index\" value=\"{{pos}}\">{{pos}}</option>\n                    </select>\n\n </section>\n        <section >\n                <button (click)=\"update()\" class=\"btn green\">Adatokfriss\u00EDt\u00E9se </button>\n\n </section>\n <sectio><button (click)=\"onArchivePic()\" class=\"btn\">K\u00E9p t\u00F6rl\u00E9se </button></sectio>\n\n\n\n\n\n\n\n\n\n       </div>\n   </div>\n\n    ",
            styleUrls: ["ingatlanKepComponent.css"],
            inputs: ['kepObj', 'positions'],
            outputs: ['archivePic', 'modifyIt', 'refresh']
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService])
    ], ingatlanKepComponent);
    return ingatlanKepComponent;
}());
exports.ingatlanKepComponent = ingatlanKepComponent;
//# sourceMappingURL=ingatlanKep.component.js.map