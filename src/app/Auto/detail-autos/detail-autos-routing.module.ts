import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAutosPage } from './detail-autos.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAutosPage
  },
  {
    path: 'detail-autos',
    loadChildren: () => import('../../Auto/detail-autos/detail-autos.module').then( m => m.DetailAutosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAutosPageRoutingModule {}
