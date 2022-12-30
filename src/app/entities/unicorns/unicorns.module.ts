import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnicornsComponent } from './unicorns.component';
import { UnicornsRouteModule } from './unicorns.route';

import { UnicornsUpdateComponent } from './unicorns-update.component';
import { UnicornsViewComponent } from './unicorns-view.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { InputDataComponentModule } from 'src/app/shared/input-data-component/input-data-component.module';




@NgModule({
  declarations: [
    UnicornsComponent,
    UnicornsUpdateComponent,
    UnicornsViewComponent
  ],
  imports: [
    CommonModule,
    UnicornsRouteModule,
    MaterialModule,
    FormsModule,
    InputDataComponentModule
  ],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [UnicornsViewComponent,UnicornsUpdateComponent]
})
export class UnicornsModule { }