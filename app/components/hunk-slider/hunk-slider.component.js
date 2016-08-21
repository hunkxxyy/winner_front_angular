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
var ingatlan_1 = require('../ingatlanok/ingatlan');
var HunkSliderComponent = (function () {
    //--------------------------CUSTOM----------------------------
    function HunkSliderComponent() {
        this.speed = 5;
        this.movingObjectArray = [];
        this.state = 'first';
        this.currentPos = 0;
        this.objWidth = 10;
        this.ingatlanSelected = new core_1.EventEmitter();
    }
    HunkSliderComponent.prototype.ngOnInit = function () {
    };
    HunkSliderComponent.prototype.next = function () {
        //   console.log(this.hunkSlider.nativeElement.clientWidth+this.hunkSlider.nativeElement.scrollLeft);
        var maxWidth = this.hunkSlider.nativeElement.scrollWidth - (this.hunkSlider.nativeElement.clientWidth + this.hunkSlider.nativeElement.scrollLeft);
        // console.log(maxWidth);
        if (maxWidth <= 0) {
            this.hunkSlider.nativeElement.scrollLeft = this.hunkSlider.nativeElement.scrollWidth - this.hunkSlider.nativeElement.clientWidth;
        }
        else {
            this.needPos = this.currentPos + this.objWidth;
            this.animate();
        }
    };
    HunkSliderComponent.prototype.prev = function () {
        if (this.currentPos > 0) {
            this.needPos = this.currentPos - this.objWidth;
            this.animate();
        }
    };
    HunkSliderComponent.prototype.animate = function () {
        var _this = this;
        if (Math.abs(this.currentPos - this.needPos) > this.speed)
            setTimeout(function () {
                if (_this.currentPos > _this.needPos)
                    _this.currentPos = _this.currentPos - _this.speed;
                else
                    _this.currentPos = _this.currentPos + _this.speed;
                _this.animate();
            }, 10);
        this.hunkSlider.nativeElement.scrollLeft = this.currentPos;
    };
    //--------------------------CUSTOM----------------------------
    HunkSliderComponent.prototype.onIngatlanSelect = function (ingatlan) {
        this.ingatlanSelected.emit(ingatlan);
    };
    __decorate([
        core_1.ViewChild('hunkSlider'), 
        __metadata('design:type', core_1.ElementRef)
    ], HunkSliderComponent.prototype, "hunkSlider", void 0);
    HunkSliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-hunk-slider',
            templateUrl: 'hunk-slider.component.html',
            styleUrls: ['hunk-slider.component.css'],
            inputs: ['movingObjectArray', 'objWidth'],
            outputs: ['ingatlanSelected'],
            directives: [ingatlan_1.IngatlanComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HunkSliderComponent);
    return HunkSliderComponent;
}());
exports.HunkSliderComponent = HunkSliderComponent;
//# sourceMappingURL=hunk-slider.component.js.map