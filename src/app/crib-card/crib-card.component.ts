import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css'],
})
export class CribCardComponent implements OnInit {
  @Input('crib') crib: any;
  constructor() {}

  ngOnInit(): void {}
}
