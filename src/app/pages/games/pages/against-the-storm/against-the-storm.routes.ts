import {Routes} from '@angular/router';
import {GamesComponent} from '../../games.component';
import {AgainstTheStormComponent} from './against-the-storm.component';


export const againstTheStormRoutes: Routes = [
	{
		path: 'against-the-storm',
		component: AgainstTheStormComponent,
	},
	{
		path: 'against-the-storm',
		title: 'Against The Storm',
		children: [
			{
				path: 'buildings',
				loadComponent: () => import('./pages/buildings/buildings.component').then(component => component.BuildingsComponent)
			},
			{
				path: 'events',
				loadComponent: () => import('./pages/events/events.component').then(component => component.EventsComponent)
			}
		]
	}
];
