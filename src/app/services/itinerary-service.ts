import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpBaseService } from './http-base-service';
import { AppConfig } from "../../environments/app-config";
import { Observable } from 'rxjs';
import { ItineraryModalComponent} from './../pages/home/transport-list/itinerary-modal/itinerary-modal.component'

@Injectable({
    providedIn: ItineraryModalComponent,
})
export class ItineraryService extends HttpBaseService {
    
    getItinerariesById(id :number): Observable<Response> {
        return this.get(AppConfig.serviceUrls().itineraries.getById + id);
    }
    
}