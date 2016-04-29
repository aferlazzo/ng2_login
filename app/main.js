"use strict";
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
// Add all operators to Observable
require('rxjs/Rx');
var list_component_1 = require('./list/list.component');
browser_1.bootstrap(list_component_1.ListComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map