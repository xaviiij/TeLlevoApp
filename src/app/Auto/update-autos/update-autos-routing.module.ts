import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAutosPage } from './update-autos.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAutosPageRoutingModule {}
