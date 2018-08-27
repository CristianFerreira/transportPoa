import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../../services/transport-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transport } from '../../../models/Transport';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ItineraryModalComponent } from './itinerary-modal/itinerary-modal.component'

@Component({
  selector: 'transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.css']
})
export class TransportListComponent implements OnInit {
  transports: Array<Transport>;
  transportsAux: Array<Transport>;
  pageSize = 0;
  page = 1;
  perPage = 5;

  constructor(private transportService: TransportService, 
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal
            ) {
                this.transports = new Array<Transport>();
                this.transportsAux = new Array<Transport>();
   }

  ngOnInit() {
    this.router.url == '/onibus' ? this.getAllBus() : this.getAllLotacao()
  }

  updateListTransports(transports :Array<Transport>) {
    this.transportsAux = transports;
    this.pageSize = this.transportsAux.length;
  }

  getAllBus() :void {
    this.transportService.getAllBus().subscribe((result) => {
      this.transports = <Array<Transport>>result.json();
      this.updateListTransports(this.transports);  
    })
  }

  getAllLotacao() :void {
    this.transportService.getAllLotacao().subscribe((result) => {
      this.transports = <Array<Transport>>result.json();
      this.updateListTransports(this.transports);
    })
  }

  openItinerary(id: number) {
    const modalRef = this.modalService.open(ItineraryModalComponent);
    modalRef.componentInstance.transportId = id;
  }


}
