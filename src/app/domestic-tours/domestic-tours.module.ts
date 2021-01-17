import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomesticToursRoutingModule } from './domestic-tours-routing.module';
import { DomesticToursFeatureComponent } from './domestic-tours-feature/domestic-tours-feature.component';
import { DomesticToursListComponent } from './domestic-tours-list/domestic-tours-list.component';
import { DomesticToursDetailComponent } from './domestic-tours-detail/domestic-tours-detail.component';
import { DomesticToursRecentComponent } from './domestic-tours-recent/domestic-tours-recent.component';
import { DomesticToursCategoryComponent } from './domestic-tours-category/domestic-tours-category.component';


@NgModule({
  declarations: [DomesticToursFeatureComponent, DomesticToursListComponent, DomesticToursDetailComponent, DomesticToursRecentComponent, DomesticToursCategoryComponent],
  imports: [
    CommonModule,
    DomesticToursRoutingModule
  ],
  exports : [DomesticToursFeatureComponent]
})
export class DomesticToursModule { }
