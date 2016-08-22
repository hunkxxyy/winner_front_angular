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
var menubar_datas_1 = require('./menubar.datas');
var MenuBarDownComponent = (function () {
    function MenuBarDownComponent() {
        this.menus = menubar_datas_1.MENU;
        this.rightMenus = menubar_datas_1.RIGHTMENU;
    }
    MenuBarDownComponent.prototype.getRndNumber = function () {
        return Math.floor(Math.random() * 599996) + 1;
    };
    MenuBarDownComponent.prototype.menuClose = function () {
        this.menus.forEach(function (obj) {
            obj.visible = false;
        });
    };
    MenuBarDownComponent.prototype.menuOpen = function (menu) {
        this.menus.forEach(function (obj) {
            if (obj != menu)
                obj.visible = false;
        });
        menu.visible = !menu.visible;
    };
    MenuBarDownComponent = __decorate([
        core_1.Component({
            selector: 'menu-bar-down',
            moduleId: module.id,
            templateUrl: 'menuBarDown.html',
            styleUrls: ["menuBarDown.css"],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuBarDownComponent);
    return MenuBarDownComponent;
}());
exports.MenuBarDownComponent = MenuBarDownComponent;
//# sourceMappingURL=menuBarDownComponent.js.map