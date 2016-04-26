
import { Component }					from 'angular2/core';
import { provide }						from 'angular2/core';
import { XHRBackend }				 	from 'angular2/http';
import { HTTP_PROVIDERS }			from 'angular2/http';

import { LoginService }				from './login.service';

@Component({
	selector: 'my-login',
	templateUrl: 'app/login/login.component.html',
	styleUrls: ['app/login/login.component.css'],
	providers:	[
		HTTP_PROVIDERS,
		LoginService
	]
})
export class LoginComponent {

	constructor (private _loginService: LoginService) { }
	public errorMessage="";
	/*
		tryToLogin() is the event handler for clicking the login button
	 */
	tryToLogin(name: string, password: string) {
		var ret;
		console.log("tryToLogin name: '%s', password: '%s'", name, password);
		if (!name) {
			return;
		}
		// here we call the service
		ret = this._loginService.tryToLoginAPI( name, password );
		this.errorMessage ="zzz";
	}
}
