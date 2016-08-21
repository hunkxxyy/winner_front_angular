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
var core_2 = require('@angular/core');
var error_service_1 = require("../../globals/services/error.service");
var API_service_1 = require("../../globals/services/API.service");
var auth_service_1 = require("../../globals/services/auth.service");
var kivalasztott_ingatlanok_service_1 = require("../../globals/services/kivalasztott-ingatlanok.service");
var haedLabel_component_1 = require("../../components/gombok/haedLabel.component");
var ingatlan_1 = require("../../components/ingatlanok/ingatlan");
var ingatlanFull_component_1 = require("../../components/ingatlanok/ingatlanFull.component");
var hunk_slider_component_1 = require('../../components/hunk-slider/hunk-slider.component');
var window_service_1 = require('../../utils/scrollWindow/window-service');
var IngatlanokViewComponent = (function () {
    function IngatlanokViewComponent(_ErrorService, _ApiService, 
        // private _ab:AnimationBuilder,
        _e, _win, _AuthService, _KivalasztottIngatlanokService) {
        this._ErrorService = _ErrorService;
        this._ApiService = _ApiService;
        this._e = _e;
        this._win = _win;
        this._AuthService = _AuthService;
        this._KivalasztottIngatlanokService = _KivalasztottIngatlanokService;
        this.limit = 40;
        this.offset = 0;
        this.listView = false;
        this.deitalPanelBlock = 'ingatlan';
        this.win = _win.nativeWindow;
    }
    ;
    IngatlanokViewComponent.prototype.ngOnInit = function () {
        this.showList();
        /*  if (this._AuthService.logged) this.loadkivalasztottInfatlanok();*/
        jQuery('.flexslider').each(function () {
            var sliderInstance = jQuery(this);
            sliderInstance.flexslider({
                animation: true,
                easing: "swing",
                direction: 'horizontal',
                slideshow: true,
                slideshowSpeed: 5000,
                animationSpeed: 600,
                initDelay: 0,
                randomize: false,
                pauseOnHover: false,
                controlNav: true,
                directionNav: true,
                prevText: "",
                nextText: "",
                start: function () { jQuery(".flex-caption").fadeIn(); }
            });
        });
    };
    IngatlanokViewComponent.prototype.showList = function () {
        var _this = this;
        // let q=(this.listView)?'api/ingatlans/where=id>1':'api/ingatlans/where=id>1&offset='+this.offset+'&limit='+this.limit;
        var q = 'api/ingatlans/where=id>1';
        this._ApiService.getResponseGET(q, '').subscribe(function (data) {
            console.log(data);
            _this.ingatlanok = data;
            _this.listaTipus = 'lista';
            if (!_this.selectedIngatlan) {
                _this.onIngatlanSelect(_this.ingatlanok[0].id);
            }
        }, function (error) {
            var msg;
            msg.type = error_service_1.MessageTypes.mtDanger;
            msg.msg.push('Sikertelen');
            _this._ErrorService.setErrorMsg(msg);
        });
    };
    IngatlanokViewComponent.prototype.next = function () {
        /* this.offset+=1;
         let open=false;
       //  console.log(this._e.nativeElement);
        // this._e.nativeElement.children[0].children[1].style.display="none";
         this._e.nativeElement.children[0].children[1];
       //  this._errorStatus=this._errorService.errorSucces;
         let before=(open)?0:50;
         let after=(open)?50:0;
         //let animation = this._ab.css();
         animation.setDuration(6000);
        animation.setFromStyles({height: before, overflow: 'hidden'}).setToStyles({height: after});
 
       if (this._errorService.errorSucces==true)
         {
             this.messageStatus='main_error_succes';
 
             setTimeout(()=>{
                 this._errorService.errorClear();
 
             },1500);
 
         }else{
             this.messageStatus='main_error';
 
         }
 
 */
        console.log(this.hunkSlider);
        this.hunkSlider.nativeElement.scrollLeft = 100;
        this.showList();
    };
    IngatlanokViewComponent.prototype.prev = function () {
        this.offset -= 1;
        this.showList();
    };
    IngatlanokViewComponent.prototype.changeView = function () {
        this.listView = !this.listView;
        this.showList();
    };
    IngatlanokViewComponent.prototype.onIngatlanSelect = function (event) {
        var _this = this;
        this._ApiService.getResponseGET('api/ingatlan/' + event, '').subscribe(function (data) {
            console.log(data);
            if (_this.selectedIngatlan)
                _this.smoothScroll('ingatlanFullDeital');
            _this.selectedIngatlan = data;
        }, function (error) {
            console.log(error);
        });
        //this.selectedIngatlan=
    };
    /***********************************
    Az automatiku scroll m�velkethez
    ***********************************/
    IngatlanokViewComponent.prototype.scrollTo = function (yPoint, duration) {
        var _this = this;
        setTimeout(function () {
            _this.win.window.scrollTo(0, yPoint);
        }, duration);
        return;
    };
    IngatlanokViewComponent.prototype.smoothScroll = function (eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            this.win.window.scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 100);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                this.scrollTo(leapY, timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            this.scrollTo(leapY, timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
    };
    IngatlanokViewComponent.prototype.showIngatlanReszletei = function (block) {
        this.deitalPanelBlock = block;
    };
    IngatlanokViewComponent.prototype.load = function (ingatlanlista) {
        this.listaTipus = ingatlanlista;
    };
    __decorate([
        core_1.ViewChild('hunkSlider'), 
        __metadata('design:type', core_1.ElementRef)
    ], IngatlanokViewComponent.prototype, "hunkSlider", void 0);
    IngatlanokViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ingatlanok-view-component',
            templateUrl: 'htmls/ingatlanok.html',
            styleUrls: ["ingatlanok.css"],
            directives: [haedLabel_component_1.HeadLabelComponent, ingatlan_1.IngatlanComponent, ingatlanFull_component_1.IngatlanFullComponent, hunk_slider_component_1.HunkSliderComponent],
            providers: [API_service_1.APIService, window_service_1.WINDOW_PROVIDERS, kivalasztott_ingatlanok_service_1.KivalasztottIngatlanokService],
            animations: [
                core_2.trigger('movementtrigger', [
                    core_2.state('first', core_2.style({ 'padding-left': '0px' })),
                    core_2.state('second', core_2.style({ 'padding-left': '200px' })),
                    core_2.transition('first=>second', [
                        core_2.animate('200ms ease-in')
                    ]),
                    core_2.transition('second=>first', [
                        core_2.animate('200ms ease-out')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, API_service_1.APIService, core_1.ElementRef, window_service_1.WINDOW, auth_service_1.AuthService, kivalasztott_ingatlanok_service_1.KivalasztottIngatlanokService])
    ], IngatlanokViewComponent);
    return IngatlanokViewComponent;
}());
exports.IngatlanokViewComponent = IngatlanokViewComponent;
/***********************************
 Az automatiku scroll m�velkethez
 ***********************************/
function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset)
        return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop)
        return document.body.scrollTop;
    return 0;
}
function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    console.log(elm);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}
//# sourceMappingURL=ingatlanokView.component.js.map