import { Routes } from '@angular/router';
import { LogInComponent } from './core/auth/log-in/log-in.component';
import { RegisterComponent } from './core/auth/register/register.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LogInComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
