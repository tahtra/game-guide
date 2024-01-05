import {Routes} from '@angular/router';


export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/against-the-storm/against-the-storm.routes').then(route => route.againstTheStormRoutes),
		title: 'Buildings'
	}
];
