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
var error_service_1 = require("../../../globals/services/error.service");
var header_component_1 = require("./header.component");
var API_service_1 = require("../../../globals/services/API.service");
var auth_service_1 = require("../../../globals/services/auth.service");
var eredmenyekDeffault_1 = require("./eredmenyekDeffault");
var global_constats_1 = require("../../../utils/global.constats");
var hunkDate_pipe_1 = require("../../../globals/pipes/hunkDate.pipe");
var DateTimePicker_component_1 = require("../../../components/date-time-picker/DateTimePicker.component");
var ckeditor_component_1 = require("../../../components/ckeditor/ckeditor.component");
var URL = global_constats_1.globals.backendIp + 'api/eredmenyek_kepek';
var EredmenyekModifyComponent = (function () {
    function EredmenyekModifyComponent(_ErrorService, _ApiSrvice, _AuthService, _RouteParams) {
        this._ErrorService = _ErrorService;
        this._ApiSrvice = _ApiSrvice;
        this._AuthService = _AuthService;
        this._RouteParams = _RouteParams;
        this.htmlValue = 'empty';
        this.ckeditorAvaible = false;
        this.eredmenyek = new eredmenyekDeffault_1.EredmenyekDeffault;
    }
    ;
    EredmenyekModifyComponent.prototype.onUpdate = function () {
        if (this.eredmenyek.id) {
            this._ApiSrvice.getResponsePUT('api/eredmenyek/modify/' + this.eredmenyek.id, this.eredmenyek)
                .subscribe(function (data) {
                if (data.errors) {
                    alert(data.errors);
                }
                else {
                    window.location.replace("#/admin/eredmenyek");
                }
            }, function (error) {
            });
        }
        else {
            this._ApiSrvice.getResponse('api/eredmenyek/', this.eredmenyek)
                .subscribe(function (data) {
                if (data.errors) {
                    alert(data.errors);
                }
                else {
                    console.log(data);
                    // this.eredmenyek = data.Eredmenyek;
                    //this.refreshKepek();
                    window.location.replace("#/admin/eredmenyek");
                }
            }, function (error) {
            });
        }
    };
    EredmenyekModifyComponent.prototype.onDelete = function () {
        var r = confirm("Biztosan törlöd az eredmenyekt?!");
        if (r == true) {
            this._ApiSrvice.getResponsePUT('api/eredmenyek/archive/' + this.eredmenyek.id, '')
                .subscribe(function (data) {
                window.location.replace("#/admin/eredmenyek");
            }, function (error) {
            });
        }
    };
    EredmenyekModifyComponent.prototype.onValueChanged = function (event) {
        this.eredmenyek.content = event;
    };
    EredmenyekModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eredmenyekId = this._RouteParams.snapshot.params['id'];
        if (this.eredmenyekId) {
            this._ApiSrvice.getResponseGET('api/eredmenyek/' + this.eredmenyekId, '')
                .subscribe(function (data) {
                console.log(data);
                _this.eredmenyek = data;
                _this.ckeditorAvaible = true;
                //console.log(this.kepek);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.ckeditorAvaible = true;
        }
    };
    EredmenyekModifyComponent.prototype.onDateChanged = function (event) {
        var old = this.eredmenyek.datum.split(" ", 2);
        var eredmenydate = event.date.year + '-' + event.date.month + '-' + event.date.day + ' ' + old[1];
        //console.log(eredmenydate);
        this.eredmenyek.datum = eredmenydate;
        //  console.log(event+'---> '+old);
    };
    EredmenyekModifyComponent.prototype.change = function (e) {
        this.htmlValue = e;
    };
    EredmenyekModifyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'eredmenyek-modify',
            templateUrl: 'eredmenyekModify.html',
            directives: [header_component_1.AdminEredmenyekHeaderComponent, DateTimePicker_component_1.DateTimePickerComponent, ckeditor_component_1.CkeditorComponent],
            styleUrls: ['eredmenyek-modify.css'],
            providers: [API_service_1.APIService],
            pipes: [hunkDate_pipe_1.hunkDate]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService, auth_service_1.AuthService, router_1.ActivatedRoute])
    ], EredmenyekModifyComponent);
    return EredmenyekModifyComponent;
}());
exports.EredmenyekModifyComponent = EredmenyekModifyComponent;
//# sourceMappingURL=eredmenyekModify.js.map