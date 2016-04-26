"use strict";
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
// Add all operators to Observable
require('rxjs/Rx');
var login_component_ts_1 = require('./login/login.component.ts');
browser_1.bootstrap(login_component_ts_1.LoginComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map