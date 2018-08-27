
import { TransportListComponent } from './transport-list.component';
import { SearchComponent } from './search/search.component';
import { ItineraryModalComponent } from './itinerary-modal/itinerary-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [CommonModule, NgxPaginationModule, FormsModule, NgbModalModule],
  declarations: [ TransportListComponent, SearchComponent, ItineraryModalComponent ],
  exports: [ TransportListComponent ],
  entryComponents: [ItineraryModalComponent]
})

export class TransportListModule { }
