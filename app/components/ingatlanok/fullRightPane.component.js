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
var szavazogomb_component_1 = require("../szavazogomb/szavazogomb.component");
var hunkCurrency_pipe_1 = require("../../globals/pipes/hunkCurrency.pipe");
var API_service_1 = require("../../globals/services/API.service");
var FullRightPanelComponent = (function () {
    function FullRightPanelComponent(_APIService) {
        this._APIService = _APIService;
        this.toplista = [];
        this.fuggobenVan = 0;
    }
    FullRightPanelComponent.prototype.ngOnInit = function () {
        this.loasToplista();
        this.getFuggoIngatlanok();
    };
    FullRightPanelComponent.prototype.loasToplista = function () {
        var _this = this;
        var apilink = 'api/ingatlan/licit/toplista/' + this.ingatlanObject.id;
        console.log(apilink);
        this._APIService.getResponseGET(apilink, '').subscribe(function (data) {
            _this.toplista = data;
        }, function (error) {
            console.log(error);
        });
    };
    FullRightPanelComponent.prototype.getFuggoIngatlanok = function () {
        var _this = this;
        var apilink = 'api/ingatlan/licit/fuggobenleve/' + this.ingatlanObject.id;
        console.log(apilink);
        this._APIService.getResponseGET(apilink, '').subscribe(function (data) {
            _this.fuggobenVan = data;
        }, function (error) {
            console.log(error);
        });
    };
    FullRightPanelComponent = __decorate([
        core_1.Component({
            selector: 'full-right-panel',
            moduleId: module.id,
            templateUrl: 'fullRightPanel.html',
            styleUrls: ["fullRightPanel.css"],
            directives: [szavazogomb_component_1.SzavazoGombComponent],
            pipes: [hunkCurrency_pipe_1.hunkCurrencyPipe],
            inputs: ['ingatlanObject', 'deitalPanelBlock'],
            providers: [API_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [API_service_1.APIService])
    ], FullRightPanelComponent);
    return FullRightPanelComponent;
}());
exports.FullRightPanelComponent = FullRightPanelComponent;
//# sourceMappingURL=fullRightPane.component.js.map