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
var ConfirmComponent = (function () {
    function ConfirmComponent() {
        this.valueConfirmed = new core_1.EventEmitter(); //the question has confirmed
        this.openedPopUp = new core_1.EventEmitter(); //get a modalcomponent be to caller component
        this.cancelBtnCaption = '';
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent.prototype.modalClosed = function () {
        /* this.modalObject.name.value=this.originalValues.name;
         this.modalObject.description=this.originalValues.description;
     
         this.onModalClosed.emit('');*/
    };
    ConfirmComponent.prototype.modalOpen = function (modal) {
        this.openedPopUp.emit(modal);
        modal.open();
    };
    ConfirmComponent.prototype.confirm = function () {
        this.valueConfirmed.emit('true');
    };
    ConfirmComponent.prototype.popIt = function () {
        this.modal.open();
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', Object)
    ], ConfirmComponent.prototype, "modal", void 0);
    ConfirmComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-confirm',
            templateUrl: 'confirm.component.html',
            styleUrls: ['confirm.component.css'],
            inputs: ['callingButton', 'question', 'title', 'cancelBtnCaption'],
            outputs: ['valueConfirmed', 'openedPopUp'],
            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map