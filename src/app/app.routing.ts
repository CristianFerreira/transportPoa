import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/onibus', pathMatch: 'full'},
    { path: 'onibus', component: HomeComponent },
    { path: 'lotacoes', component: HomeComponent },
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: true });