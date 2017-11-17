import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRoutes } from './home.routes';
import { HomeComponent } from "./home.component";

import { FormsModule } from "@angular/forms";
//import { DataTableModule } from "angular2-datatable";

@NgModule({
    imports: [
        CommonModule,
        homeRoutes,
        FormsModule,
        //DataTableModule,
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
