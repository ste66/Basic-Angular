import { Component, Input, OnInit } from '@angular/core';
// import { Crib } from '../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css'],
})
export class CribCardComponent implements OnInit {
  // @Input('crib') crib: Crib;
  @Input('crib') crib: any;
  // crib local property abiding by the interface
  constructor() {}

  ngOnInit() {
    let bedrooms = this.crib.bedrooms;
  }
}
