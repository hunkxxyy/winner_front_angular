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
//import {globals} from '../../globals/global.constats';
var API_service_1 = require('../../globals/services/API.service');
var hunkDate_pipe_1 = require('../../globals/pipes/hunkDate.pipe');
var my_inner_html_component_1 = require('../../components/my-inner-html/my-inner-html.component');
var HireinkComponent = (function () {
    function HireinkComponent(_APIService) {
        this._APIService = _APIService;
        this.news = [];
    }
    HireinkComponent.prototype.ngOnInit = function () {
        this.loadNews();
    };
    HireinkComponent.prototype.loadNews = function () {
        var _this = this;
        this._APIService.getResponseGET('api/news/where=id>0&orderBy=datum&asc=false', '').subscribe(function (data) {
            console.log(data);
            _this.news = data;
        }, function (error) {
            console.log(error);
        });
    };
    HireinkComponent = __decorate([
        core_1.Component({
            selector: 'hireink',
            moduleId: module.id,
            templateUrl: 'hireink.html',
            providers: [API_service_1.APIService],
            styleUrls: [""],
            directives: [my_inner_html_component_1.MyInnerHtmlComponent],
            pipes: [hunkDate_pipe_1.hunkDate]
        }), 
        __metadata('design:paramtypes', [API_service_1.APIService])
    ], HireinkComponent);
    return HireinkComponent;
}());
exports.HireinkComponent = HireinkComponent;
//# sourceMappingURL=hireink.component.js.map