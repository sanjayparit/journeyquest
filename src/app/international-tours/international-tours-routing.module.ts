import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToursListComponent} from './tours-list/tours-list.component';
import {TourDetailComponent} from './tour-detail/tour-detail.component';


const routes: Routes = [
  {path: 'tours', component: ToursListComponent},
  {path: 'tours/id', component: TourDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternationalToursRoutingModule { }
