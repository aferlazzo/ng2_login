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
/*
    By default the Http service does an Ajax request using XMLHttpRequest
    as the default back-end.
    The Http GET, POST, PUT, DELETE all use the request method and return an
    Observable object. We must subscribe to it so a response can be received.
 */
var ListService = (function () {
    function ListService(http) {
        this.http = http;
    }
    // 'http://localhost/ng2_list/app/list/list_endpoint.php';
    ListService.prototype.tryToListAPI = function () {
        var answer;
        var _listURL4GET;
        var getHeaders;
        // for GET use 'application/text'
        getHeaders = new http_1.Headers({ 'Content-Type': 'application/text' });
        _listURL4GET = location.href + "app/list/list_endpoint.php";
        console.log("tryToListAPI initiating a http.get(" + _listURL4GET + ")");
        return this.http
            .get(_listURL4GET, { headers: getHeaders })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ListService.prototype.extractData = function (response) {
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Bad response status: ' +
                response.status);
        }
        var body = response.json();
        return body.data || {};
    };
    ListService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error || 'Server error';
        console.log(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ListService = __decorate([
        core_1.Injectable()
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map