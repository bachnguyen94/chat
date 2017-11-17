import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from "./admin.routes";
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ],
  providers: [],
})
export class AdminModule { }
