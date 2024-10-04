import { Routes } from '@angular/router';
import { RegisterComponent } from './core/auth/register/register.component';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthComponent } from './core/auth/auth.component';
import { ViewComponent } from './views/view/view.component';
import { PageNotFoundComponent } from './views/view/page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './views/view/internal-server-error/internal-server-error.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: 'view',
        component: ViewComponent,
        children: [
            {
                path:'page-not-found',
                component: PageNotFoundComponent
            },
            {
                path:'server-error',
                component: InternalServerErrorComponent
            }
        ]
    }
];
