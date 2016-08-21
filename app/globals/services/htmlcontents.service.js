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
var API_service_1 = require('../services/API.service');
var HtmlcontentsService = (function () {
    function HtmlcontentsService(_APIService) {
        this._APIService = _APIService;
        this.kapcsolat_cim = '';
        this.contents = {
            kapcsolat_tartalom: "",
            kapcsolat_cim: "",
            regisztracio_mielott: "",
            adataim_balbox: ""
        };
        this.loadsAllContents();
    }
    HtmlcontentsService.prototype.setContent = function (id, content) {
        var _this = this;
        this._APIService.getResponsePUT('api/setcontents/' + id, { tartalom: content }).subscribe(function (data) {
            //console.log(data);
            _this.loadsAllContents();
        }, function (error) {
            console.log(error);
        });
    };
    HtmlcontentsService.prototype.loadsAllContents = function () {
        var _this = this;
        this._APIService.getResponseGET('api/getcontents/', '').subscribe(function (data) {
            _this.contents = data;
        }, function (error) {
            console.log(error);
        });
    };
    HtmlcontentsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [API_service_1.APIService])
    ], HtmlcontentsService);
    return HtmlcontentsService;
}());
exports.HtmlcontentsService = HtmlcontentsService;
//# sourceMappingURL=htmlcontents.service.js.map