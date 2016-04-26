"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var login_component_1 = require("./login.component");
/*
    By default the Http service does an Ajax request using XMLHttpRequest
    as the default back-end.
    The Http GET, POST, PUT, DELETE all use the request method and return an
    Observable object. We must subscribe to it so a response can be received.
 */
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    // 'http://localhost/ng2_login/app/login/login_endpoint.php';
    // create an observable
    LoginService.prototype.tryToLoginAPI = function (name, password) {
        var _this = this;
        var httpMethod = "post"; // set to "get"or "post"
        var _loginURL4GET;
        var _loginURL4POST;
        var _body4POST;
        var getHeaders;
        var postHeaders;
        console.log("tryToLoginAPI name: '%s', password: '%s'", name, password);
        // for POST use 'x-www-form-urlencoded' and GET use 'application/text'
        if (httpMethod == "get") {
            getHeaders = new http_1.Headers({ 'Content-Type': 'application/text' });
        }
        else {
            postHeaders = new http_1.Headers({ 'Content-Type': 'application/text' });
        }
        // notice table column in db is drivername, but in script it is just name
        if (httpMethod == "get") {
            _loginURL4GET = location.href + "app/login/login_endpoint.php?drivername=" +
                name + "&password=" + password;
            console.log("tryToLoginAPI initiating a http.get(" + _loginURL4GET + ")");
        }
        else {
            _loginURL4POST = location.href + "app/login/login_endpoint.php";
            var json_obj = {
                drivername: name,
                password: password
            };
            _body4POST = JSON.stringify(json_obj);
            console.log("tryToLoginAPI initiating a http.post(" + _loginURL4POST + ", " + _body4POST + ")");
        }
        // post create the observable object
        // call map on the response observable to create a variable to store the parsed
        // object that has been returned to us.
        // Subscribe to the observable to get the parsed login object
        // and attach it to the component
        if (httpMethod == "get") {
            return this.http
                .get(_loginURL4GET, { headers: getHeaders })
                .subscribe(function (answer) { return _this.answer = answer; });
        }
        else {
            return this.http
                .post(_loginURL4POST, _body4POST, { headers: postHeaders })
                .subscribe(function (answer) {
                _this.answer = answer;
                if (_this.answer.status == 200) {
                    console.log(_this.answer.status + " Login validated");
                }
                else {
                    console.log(_this.answer.status);
                }
                return _this.answer.status;
            }, function (err) {
                _this.err = err;
                console.log(err.status + " Unauthorized, login failure");
                _this.handleError("Login failed. Please retry.");
                return _this.err.status;
            });
        }
    };
    ;
    LoginService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error || 'Server error';
        console.log(errMsg); // log to console instead
        alert(this.err.status + " " + errMsg);
        login_component_1.LoginComponent.errorMessage = "mmm";
        return Observable_1.Observable.throw(errMsg);
    };
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map