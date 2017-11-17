import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';




import {SmartadminLayoutModule} from './layout'



@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, RouterModule,

  ],
  declarations: [

  ],
  exports: [
    CommonModule, FormsModule, HttpModule, RouterModule,

    // ModalModule,
    // ButtonsModule,
    // TooltipModule,
    // DropdownModule,
    // ProgressbarModule,
    // AlertModule,
    // TabsModule,
    // AccordionModule,
    // CarouselModule,


    SmartadminLayoutModule,




    // SmartadminFormsLiteModule,

    // SmartProgressbarModule,

    // InlineGraphsModule,


    // ChatModule,

    // StatsModule,

  ],
  providers: []

})
export class SmartadminModule {

  static forRoot():ModuleWithProviders {
    return {
      ngModule: SmartadminModule,
      providers: []
    };
  }

}
