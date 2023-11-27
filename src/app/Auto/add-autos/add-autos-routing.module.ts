import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAutosPage } from './add-autos.page';

const routes: Routes = [
  {
    path: '',
    component: AddAutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAutosPageRoutingModule {}
