
import {Injectable}								from 'angular2/core';
import {Http, Response}						from 'angular2/http';
import {Headers, RequestOptions}	from 'angular2/http';
import {Login}										from './login';
import {Observable}								from 'rxjs/Observable';
import {LoginComponent}						from "./login.component";

/*
	By default the Http service does an Ajax request using XMLHttpRequest
	as the default back-end.
	The Http GET, POST, PUT, DELETE all use the request method and return an
	Observable object. We must subscribe to it so a response can be received.
 */
@Injectable()
export class LoginService {
	constructor (private http: Http) { }

	private answer;
	private err;

	// 'http://localhost/ng2_login/app/login/login_endpoint.php';
	// create an observable

	public tryToLoginAPI (name:string, password:string ) {
		var httpMethod = "post";    // set to "get"or "post"
		var _loginURL4GET;
		var _loginURL4POST;
		var _body4POST;
		var getHeaders;
		var postHeaders;

		console.log("tryToLoginAPI name: '%s', password: '%s'", name, password);

		// for POST use 'x-www-form-urlencoded' and GET use 'application/text'
		if (httpMethod == "get") {
			getHeaders = new Headers({'Content-Type': 'application/text'});
		} else {
			postHeaders = new Headers({'Content-Type': 'application/text'});
		}

		// notice table column in db is drivername, but in script it is just name
		if (httpMethod == "get") {
			_loginURL4GET = location.href + "app/login/login_endpoint.php?drivername=" +
					name + "&password=" + password;
			console.log("tryToLoginAPI initiating a http.get(" + _loginURL4GET + ")");
		} else {
			_loginURL4POST = location.href + "app/login/login_endpoint.php";

			let json_obj = {
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
					.get(_loginURL4GET, {headers: getHeaders})

					//.map(res => res.json())

					.subscribe(answer => this.answer = answer);
		} else {
			return this.http
					.post(_loginURL4POST, _body4POST, {headers: postHeaders})

					// this causes an error: Rx.js:10982 Uncaught SyntaxError: Unexpected token < in JSON
					// Call map on the response ***observable*** to get the parsed  object
					//.map(res => res.json())

					// the act of subscribing causes the http.post to actually happen.
					// The subscribe element allows up to 3 arguments. They are positional
					// arguments. Thi first will be executed on normal processing. The second
					// argument is processed on errors. The third argument defines the function
					// that will be executed at the end of every call to the subscription.
					.subscribe(
							answer => {
								this.answer = answer;

								if (this.answer.status == 200) {
									console.log(this.answer.status + " Login validated");
								} else {
									console.log(this.answer.status);
								}
								return this.answer.status;
							},
							err => {
								this.err = err;
								console.log(err.status + " Unauthorized, login failure");
								this.handleError("Login failed. Please retry.");
								return this.err.status;
							}
					);
		}
	};


	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error || 'Server error';
		console.log(errMsg); // log to console instead
		alert(this.err.status + " " + errMsg);
		LoginComponent.errorMessage = "mmm";
		return Observable.throw(errMsg);
	}
}



