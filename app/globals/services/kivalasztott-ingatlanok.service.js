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
var API_service_1 = require("./API.service");
var KivalasztottIngatlanokService = (function () {
    function KivalasztottIngatlanokService(_APIService) {
        this._APIService = _APIService;
        this.kivalasztottIngatlanok = [];
        this.loadkivalasztottInfatlanok();
    }
    KivalasztottIngatlanokService.prototype.loadkivalasztottInfatlanok = function () {
        var _this = this;
        // let q=(this.listView)?'api/ingatlans/where=id>1':'api/ingatlans/where=id>1&offset='+this.offset+'&limit='+this.limit;
        var q = 'api/ingatlans/kivalasztott';
        this._APIService.getResponseGET(q, '').subscribe(function (data) {
            console.log(data);
            _this.kivalasztottIngatlanok = data;
        }, function (error) {
            console.log(error);
        });
    };
    KivalasztottIngatlanokService.prototype.setKuvalasztottIngatlanok = function (ingatlanok) {
        this.kivalasztottIngatlanok = [];
        this.kivalasztottIngatlanok = ingatlanok;
    };
    KivalasztottIngatlanokService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [API_service_1.APIService])
    ], KivalasztottIngatlanokService);
    return KivalasztottIngatlanokService;
}());
exports.KivalasztottIngatlanokService = KivalasztottIngatlanokService;
//# sourceMappingURL=kivalasztott-ingatlanok.service.js.map