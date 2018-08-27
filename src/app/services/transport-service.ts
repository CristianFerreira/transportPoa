import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpBaseService } from './http-base-service';
import { AppConfig } from "../../environments/app-config";
import { Observable } from 'rxjs';
import { TransportListModule } from '../pages/home/transport-list/transport-list.module'

@Injectable({
    providedIn: 'root'
})
export class TransportService extends HttpBaseService{

    getAllBus(): Observable<Response> {
        return this.get(AppConfig.serviceUrls().bus.getAll);
    }

    getAllLotacao(): Observable<Response> {
        return this.get(AppConfig.serviceUrls().lotacao.getAll);
    }
    
}