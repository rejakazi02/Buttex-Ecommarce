import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fragrances',
  templateUrl: './fragrances.component.html',
  styleUrls: ['./fragrances.component.scss']
})
export class FragrancesComponent implements OnInit {

  panelOpenState = false;

  Categorys: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  Editions: string[] = ['Online Edition (754)'];
  WearTypes: string[] = ['Casual/Plain', 'Semi-Formal', 'Formal'];
  DESIGNs: string[] = ['Cambric Shirt With'];
  ColorFamilys: string[] = ['#cc4400', '#ADD8E6', '#ff7733', '#932f06', '#36e62e', '#8993c1', '#ba3c2a', '#dd628b', '#803355', '#23039e'];
  VOLUMEs: string[] = ['Volume 6 2020', 'Volume 2 2021', 'Volume 3 2021', 'Volume 4 2021', 'Volume 5 2021', 'Volume 2 2022', 'Volume 3 2022'];
  COLLECTIONs: string[] = ['Special Edition Collection', 'Winter Collection 2020', 'The Eid Edit 21', 'The Eid Edit 21 - II', 'Mid Summer 21', 'Winter Collection 21', 'Eid Luxe 22', 'Eid Trends 22'];
  FABRICs: string[] = ['Chiffon', 'Jacquard', 'Lawn', 'Cambric', 'Cotton', 'Silk', 'CVC - Chief Value Cotton', 'Polyester', 'Linen', 'Dobby'];
  PRODUCTCATEGORYs: string[] = ['Ladies Kurti', '2 Piece Stitched', '3 Piece Stitched', 'Girls 3 Piece', 'Teens Kurti', 'Kurta Pajama/Trouser', 'Teens 3 Piece', 'Infant Kameez Shalwar', 'Women Footwear', 'Boys Kameez Shalwar'];
  FITTYPEs: string[] = ['Regular Fit', 'Smart Fit'];
  Sizes: string[] = ['02', '03','04', '05','06', '07','08', '09','10', '11','12', '13','14', '15','16', '17', 'S','L', 'M','XL', 'XXL'];


  constructor() { }

  ngOnInit(): void {
  }



  fraProducts:any[] =[
    {
      _id:1,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:' 4500',
      priceDis:' 4500',
      image:'../../../assets/images/products/fragrances/p1.webp',


    },
    {
      _id:2,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/fragrances/p2.webp"
    },
    {
      _id:3,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/fragrances/p3.webp"
    },
    {
      _id:4,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/fragrances/p4.webp"
    },
    {
      _id:5,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/fragrances/p9.webp"
    },
    {
      _id:6,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/fragrances/p5.webp"
    },
    {
      _id:7,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/fragrances/p6.webp"
    },
    {
      _id:8,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/fragrances/p7.webp"
    },
    {
      _id:9,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/fragrances/p8.webp"
    }
  ]
}
