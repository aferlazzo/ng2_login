
import { Component, OnInit }	from 'angular2/core';
import { HTTP_PROVIDERS }			from 'angular2/http';
import { Driver }  						from './driver';
import { ListService }				from './list.service';

@Component({
	selector: 'my-list',
	templateUrl: 'app/list/list.component.html',
	styleUrls: ['app/list/list.component.css']
})
export class ListComponent implements OnInit {

	constructor (	private _listService: ListService	) { }

	driver_list;
	errorMessage: "";


	ngOnInit() { this.tryToList(); }
	/*
		tryToList() is the event handler for clicking the list button
	 */
	tryToList() {
		this._listService.tryToListAPI()
				.subscribe(
						drivers => {
							this.driver_list = drivers;
							console.log("list.component: List validated " + drivers.length + " rows");
						},
						error =>  this.errorMessage = <any>error
				);
	}
}
