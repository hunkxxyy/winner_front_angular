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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var auth_service_1 = require('../../../globals/services/auth.service');
var ModalComponent = (function () {
    function ModalComponent(_AuthService) {
        this._AuthService = _AuthService;
        this.valueConfirmed = new core_1.EventEmitter(); //the question has confirmed
        this.openedPopUp = new core_1.EventEmitter(); //get a modalcomponent be to caller component
        this.callingButton = 'kicsi'; //button html code
        this.userLoged = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.modalClosed = function () {
        /* this.modalObject.name.value=this.originalValues.name;
         this.modalObject.description=this.originalValues.description;
    
         this.onModalClosed.emit('');*/
    };
    ModalComponent.prototype.modalOpen = function (modal) {
        this.userLoged = this._AuthService.logged;
        this.openedPopUp.emit(modal);
        modal.open();
    };
    ModalComponent.prototype.confirm = function () {
        this.valueConfirmed.emit('true');
    };
    ModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-modal',
            templateUrl: 'modal.component.html',
            styleUrls: ['modal.component.css'],
            inputs: ['callingButton'],
            outputs: ['valueConfirmed', 'openedPopUp'],
            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map