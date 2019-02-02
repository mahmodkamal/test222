import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';
import { MaterialsService } from 'src/app/services/materials.service';

@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ],
  providers: [
   MaterialsService
  ]

})
export class MaterialsModule { }
