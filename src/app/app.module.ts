import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DomesticToursModule} from './domestic-tours/domestic-tours.module';
import {HotelModule} from './hotel/hotel.module';
import {InternationalToursModule} from './international-tours/international-tours.module';
import {StaticpagesModule} from './staticpages/staticpages.module';
import {AdminModule} from './admin/admin.module';
import { AuthModule} from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VisaServiceComponent } from './visa-service/visa-service.component';
import { FlightComponent } from './flight/flight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    VisaServiceComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    DomesticToursModule,
    HotelModule,
    InternationalToursModule,
    StaticpagesModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
