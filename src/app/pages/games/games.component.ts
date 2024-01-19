import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';


@Component({
	selector: 'app-against-the-storm',
	standalone: true,
	imports: [
		RouterLink,
		RouterOutlet
	],
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss']
})
export class GamesComponent {

}
