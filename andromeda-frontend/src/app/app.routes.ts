import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RouteNotFoundComponent } from './pages/route-not-found/route-not-found.component';

export const routes: Routes = [

    // PUBLIC/GLOBAL COMPONENTS
    {
        path: '',
        component: LandingComponent,
        title: 'Andromeda',
    }, 
    {
        path: 'login',
        component: LoginComponent,
        title:'Iniciar sesión'
    },

    // ROUTE NOT FOUND COMPONENT
    {
        path: '**',
        component: RouteNotFoundComponent,
        title: 'Ruta no encontrada'
    }
];
