import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { ItineraryService } from './../../../../services/itinerary-service';
import { Transport } from './../../../../models/Transport';

@Component({
  selector: 'itinerary-modal',
  templateUrl: './itinerary-modal.component.html',
  styleUrls: ['./itinerary-modal.component.css']
})
export class ItineraryModalComponent implements OnInit {
  @Input() transportId;
  transport: Transport;

  constructor(public activeModal: NgbActiveModal, private itineraryService: ItineraryService) {
   }

  ngOnInit() {
    this.getItineraryById()
  }

  getItineraryById(): void {
    this.itineraryService.getItinerariesById(this.transportId).subscribe((result) => {
        this.formatObjItinerary(result.json());
    })
  }

  formatObjItinerary(obj: any) {
     let arrayLatitudeLongitude = Object.values(obj);
     arrayLatitudeLongitude = arrayLatitudeLongitude.slice(0, (arrayLatitudeLongitude.length - 3));
     arrayLatitudeLongitude.forEach((obj) => {
       
     })
      
  }

  getStreetByLatitudeLongitude() :void {

  }
}
