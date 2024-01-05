import { importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withHashLocation} from '@angular/router';
import {AppComponent} from './app/app.component';
import {routes} from './app/app.routes';


bootstrapApplication(AppComponent,
	{
		providers: [
            provideAnimations(),
            provideRouter(routes, withHashLocation()),
            importProvidersFrom(TuiRootModule)
        ]
	}
).catch((err) => console.error(err));
