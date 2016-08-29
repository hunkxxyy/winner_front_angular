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
var MyInnerHtmlComponent = (function () {
    function MyInnerHtmlComponent() {
        this.htmlContent = '<span style="color:red">htmlcontent</span>>';
    }
    MyInnerHtmlComponent.prototype.ngOnInit = function () {
        console.log(this.editorContent.nativeElement);
        this.editorContent.nativeElement.innerHTML = this.htmlContent;
        /*this.editorContent.nativeElement.innerHTML = 'helo';*/
    };
    __decorate([
        core_1.ViewChild('editorContent'), 
        __metadata('design:type', core_1.ElementRef)
    ], MyInnerHtmlComponent.prototype, "editorContent", void 0);
    MyInnerHtmlComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-my-inner-html',
            template: "<div #editorContent></div>",
            styleUrls: ['my-inner-html.component.css'],
            inputs: ['htmlContent'],
        }), 
        __metadata('design:paramtypes', [])
    ], MyInnerHtmlComponent);
    return MyInnerHtmlComponent;
}());
exports.MyInnerHtmlComponent = MyInnerHtmlComponent;
//# sourceMappingURL=my-inner-html.component.js.map