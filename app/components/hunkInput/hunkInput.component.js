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
var HunkInput = (function () {
    /* constructor(private _DictionaryService:LanguageService) {
     }*/
    function HunkInput(_element) {
        //  console.log( this._element);
        this._element = _element;
        //counter:any={'top':'40px'};
        this.className = 'form-control';
        this.onBlurEvent = new core_1.EventEmitter();
        this.onClickEvent = new core_1.EventEmitter();
        this.bgColor = '#fff';
    }
    ;
    HunkInput.prototype.onBlur = function () {
        this.onBlurEvent.emit(this.compObject.value);
    };
    HunkInput.prototype.onClick = function (event) {
        this.onClickEvent.emit(event);
    };
    HunkInput.prototype.getPadding = function () {
        return (this.maxchar) ? '50px' : '';
    };
    HunkInput.prototype.getStyle = function () {
        return (this.compObject.error) ? 'has-error has-feedback' : '';
    };
    HunkInput.prototype.ngOnInit = function () {
        if (this.maxchar)
            this.charlen = '0 / ';
        //console.log(this._element.nativeElement.children[0].children[0].value);
        /* if (this.isFocused)*/
        //this._element.nativeElement.hide();
        //  console.log(this._element.nativeElement);
    };
    HunkInput.prototype.countCharacters = function () {
        if (this.compObject.value) {
            if (this.maxchar) {
                length = this.compObject.value.length;
                if (length > this.maxchar) {
                    length--;
                    this.compObject.value = this.previusValue;
                }
                this.charlen = length + ' / ';
                this.previusValue = this.compObject.value;
            }
        }
    };
    HunkInput = __decorate([
        core_1.Component({
            selector: 'hunk-input',
            moduleId: module.id,
            template: "\n\n\n\n        <div [ngClass]=\"getStyle()\">\n\n        <input\n\n\n        type=\"text\"\n                [style.padding-right]=\"getPadding()\"\n                [style.cursor]=\"cursor\"\n                 [(ngModel)]=\"compObject.value\"\n                placeholder=\"{{compObject.placeHolder}}\"\n               class=\"{{className}}\"\n\n               autocomplete=\"off\"\n\n                (keyup)=\"countCharacters()\"\n               (blur)=\"onBlur()\"\n               (click)=\"onClick($event)\"\n\n\n\n\n                >\n\n<span  *ngIf=\"maxchar && !compObject.error\" style=\"position: absolute;top: 12px;right:0px;padding-right:20px;color:#bfafaf\" ><small >{{charlen}}{{maxchar}}</small></span>\n<span   *ngIf=\"compObject.error\" style=\"font-size:18px;position: absolute;top: 5px;right:0px;padding-right:10px;color:#bfafaf\" ><i style=\"color:red;\" class=\"fa fa-warning\" aria-hidden=\"true\"></i></span>\n<!--<span class=\"form-control-feedback\"  *ngIf=\"compObject.error\">\n    <i class=\"fa fa-warning\" aria-hidden=\"true\"></i>\n</span>-->\n\n\n\n<span class=\"feedbackLabel\"> {{compObject.error}}</span>\n\n\n</div>\n\n",
            inputs: ['compObject', 'cursor', 'className', 'maxchar'],
            outputs: ['onBlurEvent', 'onClickEvent'],
            providers: [],
            styleUrls: ["hunkInput.css"],
            directives: []
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HunkInput);
    return HunkInput;
}());
exports.HunkInput = HunkInput;
//# sourceMappingURL=hunkInput.component.js.map