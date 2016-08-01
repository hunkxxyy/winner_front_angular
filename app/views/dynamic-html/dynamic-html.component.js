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
var platform_browser_1 = require('@angular/platform-browser');
var DynamicHtmlComponent = (function () {
    function DynamicHtmlComponent(domSanitizationService) {
        this.domSanitizationService = domSanitizationService;
        this.expanded = false;
        //this.name = 'Angular2 (Release Candidate!)'
    }
    DynamicHtmlComponent.prototype.toggleExpanded = function () {
        this.expanded = !this.expanded;
    };
    DynamicHtmlComponent.prototype.getHtml = function () {
        return this.domSanitizationService.bypassSecurityTrustHtml("<div class=\"dynamic\"><b><span style=\"font-size: 40px\">Hel</span>lo</b>> world</div>");
    };
    DynamicHtmlComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dynamic-html',
            templateUrl: 'dynamic-html.component.html',
            directives: [],
            styleUrls: ["dynamic-html.component.css"],
            animations: [
                core_1.trigger('expandHeight', [
                    core_1.state('void', core_1.style({
                        height: 0
                    })),
                    core_1.state('*', core_1.style({
                        height: '*'
                    })),
                    core_1.transition('void <=> *', core_1.animate("300ms ease"))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], DynamicHtmlComponent);
    return DynamicHtmlComponent;
}());
exports.DynamicHtmlComponent = DynamicHtmlComponent;
//# sourceMappingURL=dynamic-html.component.js.map