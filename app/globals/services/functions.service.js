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
var HunkInputType_1 = require('../../components/hunkInput/HunkInputType');
var Functions = (function () {
    function Functions() {
    }
    Functions.prototype.compairStrings = function (str1, str2) {
        var str1Lover = this.hugarianToEnglish(str1.toLowerCase());
        var str2Lover = this.hugarianToEnglish(str2.toLowerCase());
        return (str1Lover == str2Lover);
    };
    //public orderByMatchIndex()
    Functions.prototype.matchAccent = function (inThis, sarchThis) {
        inThis = this.hugarianToEnglish(inThis.toLowerCase());
        sarchThis = this.hugarianToEnglish(sarchThis.toLowerCase());
        var index = inThis.indexOf(sarchThis);
        //console.log(inThis+'=='+sarchThis+':'+index);
        return (index !== -1);
    };
    Functions.prototype.markSubstring = function (string, subString, style, faultReturn) {
        if (!string || !subString)
            return '';
        var stringLover = this.hugarianToEnglish(string.toLowerCase());
        var subStringLover = this.hugarianToEnglish(subString.toLowerCase());
        var index = stringLover.indexOf(subStringLover);
        var indexObj = {
            start: index,
            length: subString.length
        };
        var part1 = string.substr(0, indexObj.start);
        var part2 = string.substr(indexObj.start, indexObj.length);
        var part3 = string.substr(indexObj.start + indexObj.length);
        if (indexObj.start == -1 && faultReturn)
            return string;
        else
            return (indexObj.start == -1) ? '' : part1 + '<span class="hunkmarked">' + part2 + '</span>' + part3;
    };
    Functions.prototype.hugarianToEnglish = function (hunChar) {
        var hun = ['á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű'];
        var eng = ['a', 'e', 'i', 'o', 'o', 'o', 'u', 'u', 'u'];
        for (var c = 0; c < hunChar.length; c++) {
            for (var i = 0; i < hun.length; i++) {
                //hunChar[c] = hunChar[c].replace(hun[i], eng[i]);
                if (hunChar[c] == hun[i]) {
                    hunChar = hunChar.replace(hun[i], eng[i]);
                }
            }
        }
        return hunChar;
    };
    //---------------DATE-----------------------------------------------
    Functions.prototype.dateObjectToDate = function (date) {
        var y = date.Year;
        var m = (date.Month > 10) ? date.Month : '0' + date.Month;
        var d = (date.Day > 10) ? date.Day : '' + date.Day;
        return y + '.' + m + '.' + d;
    };
    Functions.prototype.compressRequest = function (request) {
        var copy = Object.assign({}, request);
        for (var key in copy) {
            var value = copy[key];
            if (value instanceof Array) {
                var container = [];
                for (var _i = 0, _a = copy[key]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    container.push(this.compressRequest(item));
                }
                copy[key] = container;
            }
            else {
                var compressed = this.compressValue(copy[key]);
                if (compressed)
                    copy[key] = compressed;
                else
                    delete copy[key];
            }
        }
        return copy;
    };
    Functions.prototype.compressValue = function (value) {
        if (value instanceof HunkInputType_1.HunkInputClass)
            return value.value;
        else if (value == null)
            return false;
        else if (value.id) {
            return value.id;
        }
        else if (value instanceof Object)
            return false;
        else
            return value;
    };
    Functions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Functions);
    return Functions;
}());
exports.Functions = Functions;
//# sourceMappingURL=functions.service.js.map