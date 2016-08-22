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
var error_service_1 = require("../../globals/services/error.service");
var API_service_1 = require('../../globals/services/API.service');
var hunkRichTexteditor_component_1 = require('../../components/hunk-richtexteditor/hunkRichTexteditor.component');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var DynamicComponent = (function () {
    function DynamicComponent(domSanitizationService, _ErrorService, _ApiService, _ActivatedRoute) {
        var _this = this;
        this.domSanitizationService = domSanitizationService;
        this._ErrorService = _ErrorService;
        this._ApiService = _ApiService;
        this._ActivatedRoute = _ActivatedRoute;
        this.loadAllContents();
        this.setBanner();
        this.subscription = this._ActivatedRoute.params.subscribe(function (param) { return _this.linkId = param['id']; });
    }
    DynamicComponent.prototype.loadAllContents = function () {
        var _this = this;
        this._ApiService.getResponseGET('Szintek/tartalom/all', '').subscribe(function (data) {
            console.log(data);
            _this.contents = data;
        }, function (error) {
            console.log(error);
        });
    };
    ;
    DynamicComponent.prototype.loadContent = function () {
        var _this = this;
        var content = '';
        if (this.contents) {
            this.contents.forEach(function (obj, index) {
                if (obj.link == _this.linkId) {
                    _this.currentId = obj.id;
                    content = obj.szoveg;
                }
            });
        }
        return content;
    };
    DynamicComponent.prototype.setBanner = function () {
        this.banner = [
            {
                link: 'bemutatkozas',
                banner: "<div class=\"parallax page-header\" style=\"background-image:url('template/images/aboutus.png');\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12\"><h1>Bemutatkoz\u00E1s</h1></div></div></div></div>"
            },
            {
                link: 'jatekszabaly',
                banner: "<div class=\"parallax page-header\" style=\"background-image:url('template/images/rules2.png');\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12\"><h1 style=\" text-shadow: 2px 2px #333333;\" >J\u00E1t\u00E9kszab\u00E1ly</h1></div></div></div></div>"
            }
        ];
    };
    DynamicComponent.prototype.getBanner = function () {
        var _this = this;
        var content = '';
        if (this.contents) {
            this.banner.forEach(function (obj, index) {
                if (obj.link == _this.linkId) {
                    content = obj.banner;
                }
            });
        }
        return this.domSanitizationService.bypassSecurityTrustHtml(content);
    };
    DynamicComponent.prototype.onsaved = function (source) {
        var _this = this;
        //   alert(source);
        var content = { szoveg: source };
        this._ApiService.getResponse('Szintek/tartalom/' + this.currentId, content).subscribe(function (data) {
            _this.contents.forEach(function (obj, index) {
                if (obj.id == _this.currentId.id) {
                    _this.contents[index].szoveg = content;
                }
            });
        }, function (error) {
            console.log(error);
        });
        console.log(source);
    };
    DynamicComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DynamicComponent = __decorate([
        core_1.Component({
            selector: 'dynamic',
            template: "\n    <div class=\"site-showcase\"  [innerHtml]=\"getBanner()\">\n    <!-- Start Page Header -->\n\n    <!-- End Page Header -->\n</div>\n\n        <div class=\"container\">\n            <div class=\"page\">\n\n                 <hunk-richtext\n                 [htmlcontent]=\"loadContent()\"\n                 (saved)=\"onsaved($event)\"\n                 ></hunk-richtext>\n            </div>\n        </div>\n\n\n    ",
            directives: [hunkRichTexteditor_component_1.HunkRichTextComponent],
            styleUrls: [""],
            providers: [API_service_1.APIService, error_service_1.ErrorService]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService, error_service_1.ErrorService, API_service_1.APIService, router_1.ActivatedRoute])
    ], DynamicComponent);
    return DynamicComponent;
}());
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=dynamic.component.js.map