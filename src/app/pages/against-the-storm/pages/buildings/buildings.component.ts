import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';


@Component({
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './buildings.component.html',
	providers: []
})
export class BuildingsComponent {
}
