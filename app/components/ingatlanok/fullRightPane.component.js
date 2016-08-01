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
var FullRightPanelComponent = (function () {
    function FullRightPanelComponent() {
    }
    FullRightPanelComponent = __decorate([
        core_1.Component({
            selector: 'full-right-panel',
            moduleId: module.id,
            templateUrl: 'fullRightPanel.html',
            styleUrls: ["fullRightPanel.css"],
            directives: [szavazogomb_component_1.SzavazoGombComponent],
            pipes: [hunkCurrency_pipe_1.hunkCurrencyPipe],
            inputs: ['ingatlanObject', 'deitalPanelBlock']
        }), 
        __metadata('design:paramtypes', [])
    ], FullRightPanelComponent);
    return FullRightPanelComponent;
}());
exports.FullRightPanelComponent = FullRightPanelComponent;
//# sourceMappingURL=fullRightPane.component.js.map