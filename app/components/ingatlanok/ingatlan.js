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
var auth_service_1 = require("../../globals/services/auth.service");
var global_constats_1 = require("../../utils/global.constats");
var hunkCurrency_pipe_1 = require('../../globals/pipes/hunkCurrency.pipe');
var szavazogomb_component_1 = require('../szavazogomb/szavazogomb.component');
var IngatlanComponent = (function () {
    //mainImage:String='http://lorempixel.com/400/300/?72902';
    function IngatlanComponent(_ErrorService, _APIService, _AuthService) {
        this._ErrorService = _ErrorService;
        this._APIService = _APIService;
        this._AuthService = _AuthService;
        this.ingatlanSelected = new core_1.EventEmitter();
        this.host = global_constats_1.globals.backendIp;
        //     this.ingatlanObject.mainPic='http://lorempixel.com/400/300/?72902';
    }
    ;
    IngatlanComponent.prototype.saveToVisited = function (ingatlanId) {
        this.ingatlanSelected.emit(this.ingatlanObject.id);
        this._APIService.getResponse('api/visited', { 'ingatlan_id': ingatlanId }).subscribe(function (data) {
            //  console.log(data);
        }, function (error) {
            //console.log(error);
        });
    };
    IngatlanComponent = __decorate([
        core_1.Component({
            selector: 'ingatlan',
            moduleId: module.id,
            templateUrl: 'ingatlan.html',
            styleUrls: ["ingatlan.css"],
            inputs: ['ingatlanObject'],
            outputs: ['ingatlanSelected'],
            pipes: [hunkCurrency_pipe_1.hunkCurrencyPipe],
            directives: [szavazogomb_component_1.SzavazoGombComponent]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService, auth_service_1.AuthService])
    ], IngatlanComponent);
    return IngatlanComponent;
}());
exports.IngatlanComponent = IngatlanComponent;
//# sourceMappingURL=ingatlan.js.map