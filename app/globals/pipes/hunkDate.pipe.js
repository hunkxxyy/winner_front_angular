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
var hunkDate = (function () {
    function hunkDate() {
    }
    hunkDate.prototype.transform = function (value, args) {
        // console.log(args);
        if (typeof value === 'undefined')
            return '1974-08-30';
        var datesTime = value.split(" ", 2);
        var dates = datesTime[0].split("-", 3);
        var months = ['Jan.', 'Febr.', 'Márc.', 'Ápr.', 'Máj.', 'Jún.', 'Júl.', 'Aug.', 'Szept.', 'Okt.', 'Nov.', 'Dec.'];
        if (args == 'magyar') {
            value = dates[0] + '.' + dates[1] + '.' + dates[2];
        }
        else if (args == 'engDate') {
            value = datesTime[0];
        }
        else if (args == 'Y') {
            value = dates[0];
        }
        else if (args == 'shortDay') {
            var index = (+dates[1] - 1);
            value = months[index];
        }
        return value;
    };
    hunkDate = __decorate([
        core_1.Pipe({
            name: 'hunkDate'
        }), 
        __metadata('design:paramtypes', [])
    ], hunkDate);
    return hunkDate;
}());
exports.hunkDate = hunkDate;
//# sourceMappingURL=hunkDate.pipe.js.map