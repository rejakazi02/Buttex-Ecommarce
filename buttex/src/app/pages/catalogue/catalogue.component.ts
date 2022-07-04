import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  catOffers:any[] = [
    {
      _id:1,
      routerLink:'#',
      title:'Apparel',
      productName:'J. MONOCHROME COLLECTION 22',
      image:'../../../assets/images/products/catalogue/cat1.webp',

    },
    {
      _id:2,
      routerLink:'#',
      title:'Apparel',
      productName:'J. KIDS WEDDING AND FORMAL COLLECTION',
      image:'../../../assets/images/products/catalogue/cat2.webp',

    },
    {
      _id:3,
      routerLink:'#',
      title:'Apparel',
      productName:"J. MEN'S WEDDING & FORMAL COLLECTION",
      image:'../../../assets/images/products/catalogue/cat3.webp',

    },
    {
      _id:4,
      routerLink:'#',
      title:'Apparel',
      productName:'J. A FESTIVE AFFAIR UNSTITCHED EDITION',
      image:'../../../assets/images/products/catalogue/cat4.webp',

    },
    {
      _id:5,
      routerLink:'#',
      title:'Apparel',
      productName:'J. GIRLS - EID LUXE',
      image:'../../../assets/images/products/catalogue/cat5.webp',

    }
  ]


  getOfferId1(index: number): string {
    if(index === 0) {
      return 'item-0';
    } else {
      return 'item-1';
    }

  }

  getFragId(index: number): string {
    if(index === 0) {
      return 'item-2';
    } else if (index === 1) {
      return 'item-3';
    }
     else if (index === 2) {
      return 'item-4';
    }
     else if (index === 3) {
      return 'item-5';
    }
     else  {
      return 'item-6';
    }

  }

  getWomenId(index: number): string {
    if(index === 0) {
      return 'item-2';
    } else if (index === 1) {
      return 'item-3';
    }
     else {
      return 'item-4';
    }

  }


  getInfantId1(index: number): string {
    if(index === 0) {
      return 'item-5';
    } else if(index === 1) {
      return 'item-6'
    } else if(index===2) {
      return 'item-7'
    } else if(index===3) {
      return 'item-8'
    } else {
      return 'item-9'
    }
  }


}
