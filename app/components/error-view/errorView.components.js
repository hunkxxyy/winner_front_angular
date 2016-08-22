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
var core_2 = require('@angular/core');
var error_service_1 = require("../../globals/services/error.service");
var ErrorView = (function () {
    function ErrorView(_errorService, _e) {
        this._errorService = _errorService;
        this._e = _e;
        this.errorMsg = new Array();
        this.panelOpen = false;
        this.messageStatus = 'main_error';
        this.state = 'noerror';
    }
    ErrorView.prototype.clearErrors = function () {
        this._errorService.errorClear();
    };
    ErrorView.prototype.ngDoCheck = function () {
        //   this.state=(this.errorMsg.length>0?'haveerror':'noerror');
        if (this.errorMsg.length > 0) {
            this.state = 'haveerror';
        }
        else {
        }
    };
    ErrorView.prototype.clear = function () {
        this.errorMsg = [];
        // this.state=(this.state==='haveerror'?this.state='noerror':this.state='haveerror');
        console.log(this.state);
    };
    ErrorView = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'error-view',
            templateUrl: 'error-view.html',
            styleUrls: ["error-view.css"],
            inputs: ['errorMsg'],
            animations: [
                core_2.trigger('movementTrigger', [
                    core_2.state('noerror', core_2.style({ 'height': '0px' })),
                    core_2.state('haveerror', core_2.style({ 'height': '*' })),
                    core_2.transition('noerror=>haveerror', [
                        core_2.animate('600ms ease-in')
                    ]),
                    core_2.transition('haveerror=>noerror', [
                        core_2.animate('600ms ease-out')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, core_1.ElementRef])
    ], ErrorView);
    return ErrorView;
}());
exports.ErrorView = ErrorView;
//# sourceMappingURL=errorView.components.js.map