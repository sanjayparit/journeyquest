import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternationalToursRoutingModule } from './international-tours-routing.module';
import { ToursFeatureComponent } from './tours-feature/tours-feature.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { TourRecentComponent } from './tour-recent/tour-recent.component';
import { TourCategoryComponent } from './tour-category/tour-category.component';


@NgModule({
  declarations: [ToursFeatureComponent, ToursListComponent, TourDetailComponent, TourRecentComponent, TourCategoryComponent],
  imports: [
    CommonModule,
    InternationalToursRoutingModule
  ],
  exports : [ToursFeatureComponent]
})
export class InternationalToursModule { }
