import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAutosPageRoutingModule } from './add-autos-routing.module';

import { AddAutosPage } from './add-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAutosPageRoutingModule
  ],
  declarations: [AddAutosPage]
})
export class AddAutosPageModule {}
