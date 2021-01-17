import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelFeatureComponent } from './hotel-feature/hotel-feature.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelCategoryComponent } from './hotel-category/hotel-category.component';


@NgModule({
  declarations: [HotelFeatureComponent, HotelListComponent, HotelDetailComponent, HotelCategoryComponent],
  imports: [
    CommonModule,
    HotelRoutingModule
  ],
  exports: [HotelFeatureComponent]
})
export class HotelModule { }
