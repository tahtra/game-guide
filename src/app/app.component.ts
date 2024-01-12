import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent, SidebarComponent} from '@widgets';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
	templateUrl: './app.component.html'
})
export class AppComponent {
	sidebarHide: boolean = true;
}
