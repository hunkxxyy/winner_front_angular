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
var hunkRichTexteditor_component_1 = require('../../components/hunk-richtexteditor/hunkRichTexteditor.component');
var API_service_1 = require('../../globals/services/API.service');
var KapcsolatComponent = (function () {
    function KapcsolatComponent(_APIService) {
        this._APIService = _APIService;
        this.content = '';
        this.cim = '';
    }
    KapcsolatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._APIService.getResponseGET('api/kapcsolat/', '').subscribe(function (data) {
            _this.content = data.tartalom;
            _this.cim = data.cim;
        }, function (error) {
            console.log(error);
        });
    };
    KapcsolatComponent.prototype.contentSaved = function (data) {
        this.content = data;
        this.save();
    };
    KapcsolatComponent.prototype.cimSaved = function (data) {
        this.cim = data;
        this.save();
    };
    KapcsolatComponent.prototype.save = function () {
        var _this = this;
        var params = { id: 1, tartalom: this.content, cim: this.cim };
        this._APIService.getResponse('api/kapcsolat/', params).subscribe(function (data) {
            _this.content = data.tartalom;
            _this.cim = data.cim;
        }, function (error) {
            console.log(error);
        });
    };
    KapcsolatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-kapcsolat',
            templateUrl: 'kapcsolat.component.html',
            styleUrls: ['kapcsolat.component.css'],
            directives: [hunkRichTexteditor_component_1.HunkRichTextComponent],
            providers: [API_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [API_service_1.APIService])
    ], KapcsolatComponent);
    return KapcsolatComponent;
}());
exports.KapcsolatComponent = KapcsolatComponent;
//# sourceMappingURL=kapcsolat.component.js.map