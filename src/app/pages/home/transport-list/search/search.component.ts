import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Transport } from '../../../../models/Transport';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input() transports;
  @Output() filterResponse = new EventEmitter();
  value: string;

  filter(value: string) :void {
    if(value && this.transports.length > 0)
      this.filterResponse.emit(this.filterTransports(value));
    else if (value == "")
      this.filterResponse.emit(this.transports);  
  }

  filterTransports(value: string): Transport {
    const filterValue = value.toLowerCase();
    return this.transports.filter(transport => 
      transport.codigo.toLowerCase().indexOf(filterValue) !== -1 ||
      transport.nome.toLowerCase().indexOf(filterValue) !== -1);
  }

}
