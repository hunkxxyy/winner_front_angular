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
var auth_service_1 = require('../../globals/services/auth.service');
var modal_component_1 = require('./modal/modal.component');
var SzavazoGombComponent = (function () {
    function SzavazoGombComponent(_APIService, _AuthService) {
        this._APIService = _APIService;
        this._AuthService = _AuthService;
        this.gombStyle = 'nagy';
    }
    SzavazoGombComponent.prototype.vasarlok = function () {
        console.log('vásárlás');
    };
    SzavazoGombComponent.prototype.vasarlas_elfogadva = function () {
        var _this = this;
        var currentdate = new Date();
        var obj = {
            ingatlan_id: this.ingatlanObject.id,
            date: currentdate.getTime()
        };
        this._APIService.getResponse('api/licit/', obj).subscribe(function (data) {
            _this.ingatlanObject.szazalek_ertekesitve = data.return;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    SzavazoGombComponent = __decorate([
        core_1.Component({
            selector: 'szavazogomb',
            moduleId: module.id,
            templateUrl: 'szavazogomb.html',
            styleUrls: ["szavazogomb.css"],
            directives: [modal_component_1.mYModalComponent],
            inputs: ['gombStyle', 'ingatlanObject']
        }), 
        __metadata('design:paramtypes', [API_service_1.APIService, auth_service_1.AuthService])
    ], SzavazoGombComponent);
    return SzavazoGombComponent;
}());
exports.SzavazoGombComponent = SzavazoGombComponent;
//# sourceMappingURL=szavazogomb.component.js.map