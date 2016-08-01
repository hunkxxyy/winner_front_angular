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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require('@angular/http');
var auth_service_1 = require('./auth.service');
require('rxjs/Rx');
var global_constats_1 = require("../../utils/global.constats");
var API_URL = global_constats_1.globals.backendIp;
var APIService = (function () {
    function APIService(_http, _AuthService) {
        this._http = _http;
        this._AuthService = _AuthService;
        this._apiErrors = [];
    }
    APIService.prototype.getHeader = function () {
        /* A headerben átküldeni az acces token a következőket kell beállítani:
         header.append('Authorization', 'Bearer '+token);
         .httaccess
         RewriteCond %{HTTP:Authorization} .
         RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
         */
        var token = this._AuthService.user.access_token;
        var header = new http_2.Headers();
        header.append('Content-Type', 'application/json');
        if (token)
            header.append('Authorization', 'Bearer ' + token);
        return header;
    };
    APIService.prototype.getResponse = function (methode, params) {
        var json = JSON.stringify(params);
        var showLog = true;
        if (showLog) {
            console.log('---   POST  ------');
            console.log(API_URL + methode);
            console.log(params);
            console.log('--- ENDPOST ------');
        }
        //return this._http.post("http://52.28.112.29:8085/"+methode, json, {
        return this._http.post(API_URL + methode, json, {
            headers: this.getHeader()
        }).map(function (res) { return res.json(); });
    };
    APIService.prototype.getResponseGET = function (link, params) {
        var showLog = false;
        if (showLog) {
            console.log('---   getResponseGET  ------');
            console.log(API_URL + link);
            console.log('--- END getResponseGET ------');
        }
        return this._http.get(API_URL + link, {
            headers: this.getHeader()
        }).map(function (res) { return res.json(); });
    };
    APIService.prototype.getResponsePUT = function (methode, params) {
        var json = JSON.stringify(params);
        var showLog = false;
        if (showLog) {
            console.log('---   POST  ------');
            console.log(API_URL + methode);
            console.log(params);
            console.log('--- ENDPOST ------');
        }
        //return this._http.post("http://52.28.112.29:8085/"+methode, json, {
        return this._http.put(API_URL + methode, json, {
            headers: this.getHeader()
        }).map(function (res) { return res.json(); });
    };
    APIService.prototype.getMenus = function ($logged) {
        var link = ($logged) ? 'Szintek/menulogged' : 'Szintek/menu';
        console.log(link);
        return this.getResponseGET(link, '');
    };
    APIService.prototype.getHtmls = function (link) {
        return this.getResponseGET('Szintek/tartalom/' + link, '');
    };
    APIService.prototype.logOut = function () {
        return this.getResponseGET('oauth/exit', '');
    };
    /*   PUBLIC API Requiests    */
    APIService.prototype.getDatabase = function (name, password) {
        var loginAs = {
            name: name,
            password: password
        };
        return this.getResponse('api/getDatabase', loginAs);
    };
    APIService.prototype.postItems = function (item, ifSucces, ifError) {
        var itemsForPost = {
            item: item
        };
        console.log(itemsForPost);
        this.getResponse('restAPI/Items', itemsForPost)
            .subscribe(function (data) {
            ifSucces();
        }, function (error) {
            ifError();
        });
    };
    APIService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], APIService);
    return APIService;
}());
exports.APIService = APIService;
//# sourceMappingURL=API.service.js.map