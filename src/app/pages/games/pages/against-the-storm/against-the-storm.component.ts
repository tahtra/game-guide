import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';


@Component({
	selector: 'app-against-the-storm',
	standalone: true,
	imports: [
		RouterLink,
		RouterOutlet
	],
	templateUrl: './against-the-storm.component.html',
	styleUrl: './against-the-storm.component.scss'
})
export class AgainstTheStormComponent {

}
