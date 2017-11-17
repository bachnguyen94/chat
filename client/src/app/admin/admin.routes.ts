import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
const adminRoutes: Routes =
    [
        {
            path: '',
            component: MainLayoutComponent,
            children:
                [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', loadChildren: 'app/admin/home/home.module#HomeModule' },
                ]
        }
    ];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }