import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {HotelDetailComponent} from './hotel-detail/hotel-detail.component';


const routes: Routes = [
  {path: 'hotel', component: HotelListComponent},
  {path: 'hotel/id', component: HotelDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

  
})
export class HotelRoutingModule { }