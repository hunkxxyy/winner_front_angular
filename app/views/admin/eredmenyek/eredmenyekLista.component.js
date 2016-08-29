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
var dropDownLists_1 = require('./dropDownLists');
var header_component_1 = require("./header.component");
var API_service_1 = require('../../../globals/services/API.service');
var error_service_1 = require('../../../globals/services/error.service');
var hunkCurrency_pipe_1 = require('../../../globals/pipes/hunkCurrency.pipe');
var mark_pipe_1 = require('../../../globals/pipes/mark.pipe');
var hunkDate_pipe_1 = require('../../../globals/pipes/hunkDate.pipe');
var my_inner_html_component_1 = require('../../../components/my-inner-html/my-inner-html.component');
var EredmenyekListaComponent = (function () {
    function EredmenyekListaComponent(_APIService, _ErrorService) {
        this._APIService = _APIService;
        this._ErrorService = _ErrorService;
        this.searchByText = false;
        this.operationMenu = dropDownLists_1.OPERATIONMENU;
        this.orderByMenu = dropDownLists_1.ORDERBYMENU;
        this.limitMenu = dropDownLists_1.LIMITMENU;
        this.gridController = {
            limit: 50,
            offset: 0,
            orderBy: {
                name: 'Rögzítés időpontja',
                alias: 'id'
            },
            count: -1,
            currentPage: 1,
            PageTurnerShowNumberOfPages: 5,
            searchText: ''
        };
    }
    EredmenyekListaComponent.prototype.ngOnInit = function () {
        this.loadList();
    };
    EredmenyekListaComponent.prototype.loadList = function () {
        var _this = this;
        if (this.gridController.count < 0)
            this.getCount();
        var params = '&limit=' + this.gridController.limit + '&offset=' + this.gridController.offset + '&orderBy=' + this.gridController.orderBy.alias;
        var link = 'api/eredmenyeks/' + params;
        console.log(link);
        this._APIService.getResponseGET(link, '')
            .subscribe(function (data) {
            console.log(data);
            _this.eredmenyek = data;
            _this.setPageTurner();
        }, function (error) {
            console.log(error);
        });
    };
    EredmenyekListaComponent.prototype.getCount = function () {
        var _this = this;
        this._APIService.getResponseGET('api/eredmenyek/where=id>0&getCount', '')
            .subscribe(function (data) {
            /*console.log(data);*/
            _this.gridController.count = data;
        }, function (error) {
            console.log(error);
        });
    };
    EredmenyekListaComponent.prototype.setPageTurner = function () {
        var pages = this.gridController.count / this.gridController.limit;
        this.lastPage = Math.ceil(pages);
        var avaiblePages = [];
        var midlePoint = Math.ceil(this.gridController.PageTurnerShowNumberOfPages / 2);
        var startNumber = 1;
        if (this.gridController.currentPage > midlePoint) {
            startNumber = this.gridController.currentPage - midlePoint + 1;
        }
        if (this.gridController.currentPage > this.lastPage - midlePoint + 1) {
            startNumber = this.lastPage - this.gridController.PageTurnerShowNumberOfPages + 1;
        }
        for (var i = 1; i < this.lastPage + 1; i++) {
            if (i >= startNumber)
                avaiblePages.push(i);
            if (avaiblePages.length >= this.gridController.PageTurnerShowNumberOfPages)
                break;
        }
        this.avaiblePages = avaiblePages;
    };
    EredmenyekListaComponent.prototype.gotoPage = function (jump) {
        if (jump < 1)
            jump = 1;
        if (jump > this.lastPage)
            jump = this.lastPage;
        this.gridController.currentPage = jump;
        this.setPageTurner();
        this.gridController.offset = (jump - 1) * this.gridController.limit;
        this.loadList();
    };
    EredmenyekListaComponent.prototype.menuOpen = function (menu) {
        console.log(menu);
        menu.visible = !menu.visible;
    };
    EredmenyekListaComponent.prototype.changeLimit = function (limit) {
        this.gridController.currentPage = Math.ceil(this.gridController.offset / limit);
        this.gridController.limit = limit;
        this.loadList();
        this.limitMenu.visible = false;
    };
    EredmenyekListaComponent.prototype.changeOrderBy = function (orderBy) {
        this.gridController.orderBy = orderBy;
        this.orderByMenu.visible = false;
        console.log(this.gridController);
        this.loadList();
    };
    EredmenyekListaComponent.prototype.changeOffset = function (offset) {
        this.gridController.offset = offset;
        this.loadList();
    };
    EredmenyekListaComponent.prototype.search = function (value) {
        this.gridController.searchText = value;
        this.loadList();
    };
    EredmenyekListaComponent.prototype.runOperation = function (operation) {
        console.log(operation);
    };
    EredmenyekListaComponent.prototype.modify = function (id) {
        window.location.href = '/#/eredmenyekok/modify/' + id;
    };
    EredmenyekListaComponent.prototype.delete = function (id) {
        var _this = this;
        var txt;
        var r = confirm("Biztosan törlöd az eredmenyekt?!");
        if (r == true) {
            this._APIService.getResponsePUT('api/new/archive/' + id, '').subscribe(function (data) {
                _this.loadList();
            }, function (error) {
                console.log(error);
            });
        }
        else {
        }
    };
    EredmenyekListaComponent = __decorate([
        core_1.Component({
            selector: 'eredmenyek-lisa',
            moduleId: module.id,
            templateUrl: 'eredmenyekLista.html',
            providers: [API_service_1.APIService],
            styleUrls: ["eredmenyekLista.css"],
            directives: [header_component_1.AdminEredmenyekHeaderComponent, router_1.ROUTER_DIRECTIVES, my_inner_html_component_1.MyInnerHtmlComponent],
            pipes: [hunkCurrency_pipe_1.hunkCurrencyPipe, mark_pipe_1.markPipe, hunkDate_pipe_1.hunkDate]
        }), 
        __metadata('design:paramtypes', [API_service_1.APIService, error_service_1.ErrorService])
    ], EredmenyekListaComponent);
    return EredmenyekListaComponent;
}());
exports.EredmenyekListaComponent = EredmenyekListaComponent;
//# sourceMappingURL=eredmenyekLista.component.js.map