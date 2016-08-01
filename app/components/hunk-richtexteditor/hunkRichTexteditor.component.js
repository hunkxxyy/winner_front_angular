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
var HunkRichTextComponent = (function () {
    function HunkRichTextComponent(_element, domSanitizationService) {
        this._element = _element;
        this.domSanitizationService = domSanitizationService;
        this.saveIconBarTop = 280;
        this.isEditing = false; //editing mode
        this.viewIconsIconsVisible = false;
        this.saved = new core_1.EventEmitter();
        this.showSource = false;
        this.mainstyle = { padding: 50, lineheight: 99, width: 500, top: 0 };
        this.fontColors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
        this.fontSizes = [];
        this.customClasses = [{ 'name': 'piros fejléccel' }, { 'name': 'Főcím' }];
    }
    HunkRichTextComponent.prototype.ngOnInit = function () {
        // console.log(this.source);
        // this.refresh();
        for (var i = 8; i < 51; i = i + 2) {
            this.fontSizes.push(i);
        }
        console.log(this._element);
        this.mainstyle.width = this._element.nativeElement.children[0].clientWidth;
        this.mainstyle.top = this._element.nativeElement.children[0].offsetTop;
    };
    /*viewIconsIcons events BEGIN*/
    HunkRichTextComponent.prototype.onShowSource = function () {
        this.showSource = !this.showSource;
        if (this.showSource) {
            if (this.source) {
                this.refresh();
                this.source = this.htmlcontent;
            }
            else {
                this.source = this.htmlcontent;
            }
        }
    };
    HunkRichTextComponent.prototype.editing = function (event) {
        if (this.source)
            this.htmlcontent = this.source;
        this.isEditing = event;
    };
    /*viewIconsIcons events END*/
    HunkRichTextComponent.prototype.refresh = function () {
        //  console.log(this.editorContent);
        if (this.viewIconsIconsVisible)
            this.focuseelement = this.editorContent.nativeElement.innerHTML;
        else {
            this.focuseelement = this.editorContent.nativeElement.innerHTML;
        }
        this.source = this.focuseelement;
    };
    HunkRichTextComponent.prototype.getSelectionHtml = function () {
        var range = window.getSelection().getRangeAt(0), content = range.extractContents(), span = document.createElement('SPAN');
        span.appendChild(content);
        var htmlContent = span.innerHTML;
        console.log(htmlContent);
        return htmlContent;
    };
    HunkRichTextComponent.prototype.insertAction = function (tagBefore, tagAfter) {
        var sel = window.getSelection();
        /*console.log(sel.focusNode.parentNode.style);
         console.log(sel);*/
        var html;
        if (sel.toString() == "") {
            html = tagBefore + '&zwnj;' + tagAfter;
        }
        else {
            html = tagBefore + this.getSelectionHtml() + tagAfter;
        }
        var range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        if (range.createContextualFragment) {
            var fragment = range.createContextualFragment(html);
            range.insertNode(fragment);
            this.refresh();
            if (sel.toString() == "")
                this.putFocusInsideTag();
        }
    };
    HunkRichTextComponent.prototype.putFocusInsideTag = function () {
        var el = window.getSelection().focusNode.nextSibling;
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(el, 1);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    };
    HunkRichTextComponent.prototype.updateFromSource = function () {
        this.htmlcontent = this.source;
    };
    HunkRichTextComponent.prototype.save = function () {
        this.refresh();
        // console.log(this.source);
        this.saved.emit(this.source);
    };
    /*Gloabals Editing Begin*/
    HunkRichTextComponent.prototype.changeFontSize = function (fontsize) {
        this.insertAction('<span style=font-size:' + fontsize + 'px;>', '</span>');
        //   this.changelineSize(fontsize*1.4);
    };
    HunkRichTextComponent.prototype.changeFontColor = function (color) {
        this.insertAction('<span style=color:' + color + '>', '</span>');
    };
    HunkRichTextComponent.prototype.changebgColor = function (color) {
        this.insertAction('<span style=background-color:' + color + '>', '</span>');
    };
    HunkRichTextComponent.prototype.changelineSize = function (fontsize) {
        this.insertAction('<span style=line-height:' + fontsize + 'px>', '</span>');
    };
    HunkRichTextComponent.prototype.onChangeMainStyle = function (way) {
        switch (way) {
            case 'compress':
            case 'expand':
                this.mainstyle.padding += (way == 'compress') ? +20 : -20;
                break;
        }
    };
    /*Gloabals Editing END*/
    HunkRichTextComponent.prototype.getHtml = function () {
        /*   return this.domSanitizationService.bypassSecurityTrustHtml(`<div class="dynamic"><b><span style="font-size: 40px">Hel</span>lo</b>> world</div>`);*/
        var html = this.domSanitizationService.bypassSecurityTrustHtml(this.htmlcontent);
        return html;
    };
    __decorate([
        core_1.ViewChild('editorContent'), 
        __metadata('design:type', core_1.ElementRef)
    ], HunkRichTextComponent.prototype, "editorContent", void 0);
    HunkRichTextComponent = __decorate([
        core_1.Component({
            selector: 'hunk-richtext',
            moduleId: module.id,
            templateUrl: 'richtextview.html',
            providers: [],
            styleUrls: ["richtextview.css"],
            directives: [],
            inputs: ['htmlcontent', 'saveIconBarTop'],
            outputs: ['saved']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, platform_browser_1.DomSanitizationService])
    ], HunkRichTextComponent);
    return HunkRichTextComponent;
}());
exports.HunkRichTextComponent = HunkRichTextComponent;
//# sourceMappingURL=hunkRichTexteditor.component.js.map