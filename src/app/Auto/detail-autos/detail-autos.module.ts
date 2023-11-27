import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAutosPageRoutingModule } from './detail-autos-routing.module';

import { DetailAutosPage } from './detail-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAutosPageRoutingModule
  ],
  declarations: [DetailAutosPage]
})
export class DetailAutosPageModule {}
