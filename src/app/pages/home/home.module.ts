import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportListModule } from './transport-list/transport-list.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component'

@NgModule({
  imports: [ TransportListModule],
  declarations: [ HomeComponent, NavbarComponent ],
  exports: [ HomeComponent ]
})

export class HomeModule { }
