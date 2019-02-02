import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';

@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ]
})
export class MaterialsModule { }
