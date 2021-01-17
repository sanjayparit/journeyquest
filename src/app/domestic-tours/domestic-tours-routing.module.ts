import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DomesticToursListComponent} from './domestic-tours-list/domestic-tours-list.component';
import {DomesticToursDetailComponent} from './domestic-tours-detail/domestic-tours-detail.component';

const routes: Routes = [
  {path: 'dtours' , component: DomesticToursListComponent},
  {path: 'dtours/id', component: DomesticToursDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomesticToursRoutingModule { }
