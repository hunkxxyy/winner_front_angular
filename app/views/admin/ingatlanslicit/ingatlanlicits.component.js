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
var API_service_1 = require('../../../globals/services/API.service');
var hunkDate_pipe_1 = require('../../../globals/pipes/hunkDate.pipe');
var IngatlanLicitComponent = (function () {
    function IngatlanLicitComponent(_APIService) {
        this._APIService = _APIService;
    }
    IngatlanLicitComponent.prototype.ngOnInit = function () {
        this.load();
    };
    IngatlanLicitComponent.prototype.load = function () {
        var _this = this;
        this._APIService.getResponseGET('api/ingatlan/' + this.licits + '/licits/', '').subscribe(function (data) {
            console.log(data);
            _this.licitalasok = data;
        }, function (error) {
            console.log(error);
        });
    };
    IngatlanLicitComponent = __decorate([
        core_1.Component({
            selector: 'ingatlan-licit',
            moduleId: module.id,
            templateUrl: 'ingatlanlicit.html',
            providers: [API_service_1.APIService],
            styleUrls: [""],
            inputs: ['licits'],
            directives: [],
            pipes: [hunkDate_pipe_1.hunkDate]
        }), 
        __metadata('design:paramtypes', [API_service_1.APIService])
    ], IngatlanLicitComponent);
    return IngatlanLicitComponent;
}());
exports.IngatlanLicitComponent = IngatlanLicitComponent;
//# sourceMappingURL=ingatlanlicits.component.js.map