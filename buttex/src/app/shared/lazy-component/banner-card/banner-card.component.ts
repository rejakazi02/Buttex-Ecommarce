import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent implements OnInit {

  
  @Input() infant?:any;
  // @Input() perfume?:any;
  // @Input() product?:any;
  // @Input() womenFootwear?:any;


  constructor() { }

  ngOnInit(): void {
  }

}
