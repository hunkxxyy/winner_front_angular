"use strict";
var AuthService = (function () {
    function AuthService() {
        this.logged = false;
        //  this.userDestroy();
        this.getUser();
    }
    AuthService.prototype.grantType = function () {
        return (this.logged) ? 'refresh_token' : 'password';
    };
    AuthService.prototype.getUser = function () {
        if (!this.user) {
            var token = this.getCookie('access_token');
            if (token) {
                this.user = {
                    access_token: token
                };
                console.log(this.user);
                this.logged = true;
            }
            else {
                this.user = { access_token: '' };
                this.logged = false;
            }
        }
        //    console.log(this._user);
    };
    AuthService.prototype.userDestroy = function () {
        this.setCookie('access_token', '', 1);
        this.logged = false;
        return this.logged;
    };
    AuthService.prototype.setUser = function (authType) {
        this.user = authType;
        this.setCookie('access_token', this.user.access_token, 2);
        this.logged = true;
        return this.logged;
    };
    AuthService.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    };
    AuthService.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map