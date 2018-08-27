import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';

import { HttpBaseService } from './services/http-base-service';
import { ItineraryService } from './services/itinerary-service';
import { TransportService } from './services/transport-service';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,                             
    ReactiveFormsModule,   
    BrowserModule,
    Routing,
    HomeModule,
    HttpModule
  ],
  providers: [ItineraryService, TransportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
