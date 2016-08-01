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
var hunkInput_component_1 = require('../../hunkInput/hunkInput.component');
var ModalComponent = (function () {
    function ModalComponent(_ElementRef) {
        this._ElementRef = _ElementRef;
        this.valueSaved = new core_1.EventEmitter();
        this.openedPopUp = new core_1.EventEmitter();
        this.onModalClosed = new core_1.EventEmitter();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.modalClosed = function () {
        this.modalObject.name.value = this.originalValues.name;
        this.modalObject.name.error = '';
        this.modalObject.description = this.originalValues.description;
        this.onModalClosed.emit('');
    };
    ModalComponent.prototype.modalOpen = function (modal) {
        this.originalValues = { name: this.modalObject.name.value, description: this.modalObject.description };
        this.openedPopUp.emit(modal);
        modal.open();
        // console.log(this._ElementRef);
    };
    ModalComponent.prototype.save = function () {
        this.valueSaved.emit(this.modalObject);
    };
    ModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-modal',
            templateUrl: 'modal.component.html',
            styleUrls: ['modal.component.css'],
            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, hunkInput_component_1.HunkInput],
            inputs: ['modalObject', 'btnCaption'],
            outputs: ['valueSaved', 'openedPopUp', 'onModalClosed']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map