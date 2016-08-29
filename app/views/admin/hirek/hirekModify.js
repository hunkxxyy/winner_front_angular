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
var hirekDeffault_1 = require("./hirekDeffault");
var global_constats_1 = require("../../../utils/global.constats");
var hunkDate_pipe_1 = require("../../../globals/pipes/hunkDate.pipe");
var DateTimePicker_component_1 = require("../../../components/date-time-picker/DateTimePicker.component");
var ckeditor_component_1 = require("../../../components/ckeditor/ckeditor.component");
var URL = global_constats_1.globals.backendIp + 'api/hirek_kepek';
var HirekModifyComponent = (function () {
    function HirekModifyComponent(_ErrorService, _ApiSrvice, _AuthService, _RouteParams) {
        this._ErrorService = _ErrorService;
        this._ApiSrvice = _ApiSrvice;
        this._AuthService = _AuthService;
        this._RouteParams = _RouteParams;
        this.ckeditorAvaible = false;
        this.news = new hirekDeffault_1.HirekDeffault;
    }
    ;
    HirekModifyComponent.prototype.onUpdate = function () {
        if (this.news.id) {
            this._ApiSrvice.getResponsePUT('api/new/modify/' + this.news.id, this.news)
                .subscribe(function (data) {
                if (data.errors) {
                    alert(data.errors);
                }
                else
                    window.location.replace("#/admin/hirek");
            }, function (error) {
            });
        }
        else {
            this._ApiSrvice.getResponse('api/new/', this.news)
                .subscribe(function (data) {
                console.log(data);
                if (data.errors) {
                    alert(data.errors);
                }
                else {
                    console.log(data);
                    // this.news = data.Hirek;
                    //this.refreshKepek();
                    window.location.replace("#/admin/hirek");
                }
            }, function (error) {
            });
        }
    };
    HirekModifyComponent.prototype.onDelete = function () {
        var r = confirm("Biztosan törlöd az hirekt?!");
        if (r == true) {
            this._ApiSrvice.getResponsePUT('api/new/archive/' + this.news.id, '')
                .subscribe(function (data) {
                window.location.replace("#/admin/hirek");
            }, function (error) {
            });
        }
    };
    HirekModifyComponent.prototype.onModifyIt = function ($event) {
        this.modifying = $event;
        //console.log($event);
        var css = 'selected';
        if ($event.cssClass == 'selected')
            css = '';
        $event.cssClass = css;
    };
    HirekModifyComponent.prototype.ngOnInit = function () {
        //todo: ide vissza kell térni mert a route arams máshogyan megy
        var _this = this;
        this.newsId = +this._RouteParams.snapshot.params['id'];
        if (this.newsId) {
            this._ApiSrvice.getResponseGET('api/new/' + this.newsId, '')
                .subscribe(function (data) {
                console.log(data);
                _this.news = data;
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
    HirekModifyComponent.prototype.onDateChanged = function (event) {
        var old = this.news.datum.split(" ", 2);
        var newdate = event.date.year + '-' + event.date.month + '-' + event.date.day + ' ' + old[1];
        //console.log(newdate);
        this.news.datum = newdate;
        //  console.log(event+'---> '+old);
    };
    HirekModifyComponent.prototype.onValueChanged = function (event) {
        this.news.content = event;
    };
    HirekModifyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hirek-modify',
            templateUrl: 'hirekModify.html',
            directives: [header_component_1.AdminHirekHeaderComponent, DateTimePicker_component_1.DateTimePickerComponent, ckeditor_component_1.CkeditorComponent],
            styleUrls: ['hirek-modify.css'],
            providers: [API_service_1.APIService],
            pipes: [hunkDate_pipe_1.hunkDate]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService, auth_service_1.AuthService, router_1.ActivatedRoute])
    ], HirekModifyComponent);
    return HirekModifyComponent;
}());
exports.HirekModifyComponent = HirekModifyComponent;
//# sourceMappingURL=hirekModify.js.map