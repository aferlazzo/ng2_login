import { bootstrap }      from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';

// Add all operators to Observable
import 'rxjs/Rx';

import { LoginComponent } from './login/login.component.ts';
bootstrap(LoginComponent, [HTTP_PROVIDERS]);
