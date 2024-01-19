import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Location} from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	templateUrl: './header.component.html',
	imports: [
		RouterLink
	],
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	constructor(private location: Location)
	{}

	backClicked() {
		this.location.back();
	}
}
