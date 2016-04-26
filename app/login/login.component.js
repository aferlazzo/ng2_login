"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    function LoginComponent(_loginService) {
        this._loginService = _loginService;
        this.errorMessage = "";
    }
    /*
        tryToLogin() is the event handler for clicking the login button
     */
    LoginComponent.prototype.tryToLogin = function (name, password) {
        var ret;
        console.log("tryToLogin name: '%s', password: '%s'", name, password);
        if (!name) {
            return;
        }
        // here we call the service
        ret = this._loginService.tryToLoginAPI(name, password);
        this.errorMessage = "zzz";
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: 'app/login/login.component.html',
            styleUrls: ['app/login/login.component.css'],
            providers: [
                http_1.HTTP_PROVIDERS,
                login_service_1.LoginService
            ]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map