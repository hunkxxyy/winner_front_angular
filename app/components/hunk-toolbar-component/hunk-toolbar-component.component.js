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
var auth_service_1 = require('../../globals/services/auth.service');
var HunkToolbarComponentComponent = (function () {
    function HunkToolbarComponentComponent(_AuthService) {
        this._AuthService = _AuthService;
        this.show = false;
        this.admin = true;
        this.mode = ['preview', 'edit'];
        this.captionArr = ['Élő nézet', 'Szerkeztői nézet'];
        this.selectedMode = false;
        this.toolbarLeave = new core_1.EventEmitter();
        this.changeView = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.caption = this.captionArr[1];
        console.log(this._AuthService);
    }
    HunkToolbarComponentComponent.prototype.leave = function () {
        this.toolbarLeave.emit('any');
    };
    HunkToolbarComponentComponent.prototype.onChangeView = function () {
        this.selectedMode = !this.selectedMode;
        this.caption = (this.selectedMode) ? this.captionArr[0] : this.captionArr[1];
        this.changeView.emit((this.selectedMode) ? this.mode[1] : this.mode[0]);
    };
    HunkToolbarComponentComponent.prototype.onSave = function () {
        this.selectedMode = false;
        this.caption = this.captionArr[1];
        this.save.emit('');
    };
    HunkToolbarComponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-hunk-toolbar-component',
            templateUrl: 'hunk-toolbar-component.component.html',
            styleUrls: ['hunk-toolbar-component.component.css'],
            inputs: ['show'],
            outputs: ['toolbarLeave', 'changeView', 'save'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HunkToolbarComponentComponent);
    return HunkToolbarComponentComponent;
}());
exports.HunkToolbarComponentComponent = HunkToolbarComponentComponent;
//# sourceMappingURL=hunk-toolbar-component.component.js.map