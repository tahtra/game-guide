import {Component} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';


@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		TuiSvgModule
	],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
