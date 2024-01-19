import {Routes} from '@angular/router';
import {GamesComponent} from './pages/games/games.component';


export const routes: Routes = [
	{
		path: 'games',
		component: GamesComponent
	},
	{
		path: 'games',
		loadChildren: () => import('./pages/games/pages/against-the-storm/against-the-storm.routes').then(route => route.againstTheStormRoutes)
	},
	{
		path: '**',
		redirectTo: 'games'
	}
];
