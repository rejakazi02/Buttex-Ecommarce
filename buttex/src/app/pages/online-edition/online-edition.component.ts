import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-edition',
  templateUrl: './online-edition.component.html',
  styleUrls: ['./online-edition.component.scss']
})



export class OnlineEditionComponent implements OnInit {

  panelOpenState = false;

  Categorys: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  Editions: string[] = ['Online Edition (754)'];
  WearTypes: string[] = ['Casual/Plain', 'Semi-Formal', 'Formal'];
  DESIGNs: string[] = ['Cambric Shirt With'];

  constructor() { }

  ngOnInit(): void {
  }






  onlineEditions:any[] =[
    {
      _id:1,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/onlineEdition/p1.webp',
      // productSize: ["2","3","4","5","6","7","8"]
      productSize: ["S","M","L","XL"]


    },
    {
      _id:2,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/onlineEdition/p2.webp',
      productSize: ["8","12","18"]
    },
    {
      _id:3,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/onlineEdition/p3.webp',
      productSize: ["8","12","18"]
    },
    {
      _id:4,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/onlineEdition/p4.webp',
      productSize: ["8","12","18"]
    },
    {
      _id:5,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/onlineEdition/p5.webp',
      productSize: ["8","12","18"]
    },
    {
      _id:6,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/onlineEdition/p6.webp',
      productSize: ["8","12","18"]
    },
    {
      _id:7,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/onlineEdition/p7.webp',
      productSize: ["8","12","18"]
    },
    {
      _id:8,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/onlineEdition/p8.webp',
      productSize: ["8","12","18"]
    },
    {
      _id:9,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/onlineEdition/p9.webp',
      productSize: ["8","12","18"]
    }
  ]


  getProdId(index: number): string {
    if(index === 0) {
      return 'item-0';
    } else if(index === 1) {
      return 'item-1';
    } else  {
      return 'item-2';
    }

  }
}
