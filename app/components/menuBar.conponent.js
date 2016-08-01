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
var MenuBarComponent = (function () {
    function MenuBarComponent() {
        this.showSale = false;
    }
    MenuBarComponent.prototype.onMouseOut = function (event) {
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e == this) {
            return;
        }
        console.log(e.nodeType);
        // handle mouse eve
    };
    MenuBarComponent = __decorate([
        core_1.Component({
            selector: 'menu-bar',
            template: "\n<nav>\n  <div class=\"menubar-bg\">\n     <div class=\"dropdown\">\n         <button class=\"dropbtn\"><dict [index]=\"'Sales'\"></dict> </button>\n         <div class=\"dropdown-content\">\n\n\n            <a [routerLink]=\"['NewItem']\" id=\"linkNewItem\"><dict [index]=\"'Add new item'\"></dict></a>\n            <a [routerLink]=\"['NewPartner']\"><dict [index]=\"'Add new partner'\"></dict></a>\n             <a [routerLink]=\"['InvoiceList']\"><dict [index]=\"'List of invoice'\"></dict></a>\n        </div>\n    </div>\n    <div class=\"dropdown\">\n         <button class=\"dropbtn\"><dict [index]=\"'Setup'\"></dict></button>\n         <div class=\"dropdown-content\">\n            <a [routerLink]=\"['Login']\"><dict [index]=\"'Login'\"></dict></a>\n            <a [routerLink]=\"['Admin']\"><dict [index]=\"'Admin'\"></dict></a>\n\n\n        </div>\n    </div>\n   </div>\n</nav>\n\n\n    ",
            styleUrls: ["../src/css/menu-bar.css"],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuBarComponent);
    return MenuBarComponent;
}());
exports.MenuBarComponent = MenuBarComponent;
//# sourceMappingURL=menuBar.conponent.js.map