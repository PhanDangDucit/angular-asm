import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AdminLayoutComponent } from '../components/admin/admin-layout/admin-layout.component';
import { NotFoundComponentComponent } from '../components/not-found-component/not-found-component.component';
import { childAdminRoutes } from './admin.route';
import { childUserRoutes } from './users.route';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // { 
    //     path: 'dashboard',
    //     redirectTo: ({queryParams}) => {
    //         const authService = inject(AuthServiceService);
    //         if(authService.username.length > 0) {
    //             return 'dashboard'
    //         }
    //         return 'signin'
    //     },
    //     pathMatch: 'full'
    // },
    {
        path: "",
        component: AppComponent,
        title: "home",
        children: childUserRoutes
    },
    {
        path: "admin", 
        component: AdminLayoutComponent,
        title: "Dashboard",
        children: childAdminRoutes
    },
    {
        path: "**", 
        component: NotFoundComponentComponent,
        title: "not found"
    }
];