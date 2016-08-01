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
var global_constats_1 = require("../../utils/global.constats");
var fullRightPane_component_1 = require('./fullRightPane.component');
var IngatlanFullComponent = (function () {
    function IngatlanFullComponent() {
        this.host = global_constats_1.globals.backendIp;
        // this.ingatlanObject=new ingatlanObj();
        // this.ingatlanObject.nagykep='/ingatlankepek/9/kozepes/9.jpg';
    }
    IngatlanFullComponent.prototype.pictureChange = function (pic) {
        this.ingatlanObject.defaultImg.paths.kozepes = pic.paths.kozepes;
    };
    IngatlanFullComponent.prototype.ngOnInit = function () {
        //   this.bigpic=this.host+this.ingatlanObject.kepek[0].paths.kozepes;
    };
    IngatlanFullComponent = __decorate([
        core_1.Component({
            selector: 'ingatlan-full',
            moduleId: module.id,
            templateUrl: 'ingatlanFull.html',
            styleUrls: ["ingatlanFull.css"],
            inputs: ['ingatlanObject', 'deitalPanelBlock'],
            directives: [fullRightPane_component_1.FullRightPanelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], IngatlanFullComponent);
    return IngatlanFullComponent;
}());
exports.IngatlanFullComponent = IngatlanFullComponent;
//# sourceMappingURL=ingatlanFull.component.js.map