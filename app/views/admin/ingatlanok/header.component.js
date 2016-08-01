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
var router_1 = require('@angular/router');
var AdminIngatlanHeaderComponent = (function () {
    function AdminIngatlanHeaderComponent() {
    }
    AdminIngatlanHeaderComponent.prototype.ngOnInit = function () {
        var links = window.location.href.split("/");
        var url = links[links.length - 1];
        switch (url) {
            case 'ingatlanok':
                this.col_1style = { 'background-color': '#000066' };
                break;
            case 'new':
                this.col_2style = { 'background-color': '#000066' };
                break;
            default:
                this.col_1style = { 'background-color': '#000066' };
                break;
        }
    };
    AdminIngatlanHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-ingatlan-header',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n<div class=\"container-fluid \">\n        <div class=\"row\">\n        <header >\n            <a href=\"#/admin/ingatlanok\"><div class=\"col-md-6 headCol\">\n                <div class=\"head-labels\"  [ngStyle]=\"col_1style\"> Ingatlanok list\u00E1ja</div>\n            </div></a>\n             <a [routerLink]=\"['/ingatlanok/modify','new']\"><div class=\"col-md-6 headCol\">\n                <div class=\"head-labels\" [ngStyle]=\"col_2style\">\u00DAj ingatlan felv\u00E9tele</div>\n            </div></a>\n                </header>\n    </div>\n  <router-outlet></router-outlet>\n</div>\n    ",
            styleUrls: ["admin.css"],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminIngatlanHeaderComponent);
    return AdminIngatlanHeaderComponent;
}());
exports.AdminIngatlanHeaderComponent = AdminIngatlanHeaderComponent;
//# sourceMappingURL=header.component.js.map