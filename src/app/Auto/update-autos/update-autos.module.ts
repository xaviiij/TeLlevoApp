import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAutosPageRoutingModule } from './update-autos-routing.module';

import { UpdateAutosPage } from './update-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAutosPageRoutingModule
  ],
  declarations: [UpdateAutosPage]
})
export class UpdateAutosPageModule {}
