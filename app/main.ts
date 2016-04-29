import { bootstrap }      from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ListService }		from './list/list.service';
// Add all operators to Observable
import 'rxjs/Rx';

import { ListComponent } from './list/list.component';
bootstrap(ListComponent, [HTTP_PROVIDERS, ListService]);
