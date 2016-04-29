"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var ListComponent = (function () {
    function ListComponent(_listService) {
        this._listService = _listService;
    }
    ListComponent.prototype.ngOnInit = function () { this.tryToList(); };
    /*
        tryToList() is the event handler for clicking the list button
     */
    ListComponent.prototype.tryToList = function () {
        var _this = this;
        this._listService.tryToListAPI()
            .subscribe(function (drivers) { return _this.drivers = drivers; }, function (error) { return _this.errorMessage = error; });
        console.log("list.component: List validated " + this.drivers.length + " rows");
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'my-list',
            templateUrl: 'app/list/list.component.html',
            styleUrls: ['app/list/list.component.css']
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map