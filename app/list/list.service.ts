
import {Injectable}								from 'angular2/core';
import {Http, Response}						from 'angular2/http';
import {Headers}									from 'angular2/http';
import { Driver }									from './driver';
import {Observable}								from 'rxjs/Observable';

@Injectable()
export class ListService {
	constructor (private http: Http) { }

	private err;

	tryToListAPI ():Observable<Driver[]> {
		var answer;
		var _listURL4GET;
		var getHeaders;
		var driver_data;

		// for GET use 'application/text'

		getHeaders = new Headers({'Content-Type': 'application/text'});
		_listURL4GET = location.href + "app/list/list_endpoint.php";
		console.log("tryToListAPI initiating a http.get(" + _listURL4GET + ")");

		driver_data = this.http
				.get(_listURL4GET, {headers: getHeaders})
				.map(this.extractData)
				.catch(this.handleError);
		return driver_data;
	}

	private extractData(response: Response) {
		if (response.status < 200 || response.status >= 300) {
			throw new Error('Bad response status: ' +
					response.status);
		}
		let body = response.json();
		return body || [{ }];
	}


	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error || 'Server error';
		console.log(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}



