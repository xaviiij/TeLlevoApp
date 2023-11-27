import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAutosPageRoutingModule } from './delete-autos-routing.module';

import { DeleteAutosPage } from './delete-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAutosPageRoutingModule
  ],
  declarations: [DeleteAutosPage]
})
export class DeleteAutosPageModule {}
