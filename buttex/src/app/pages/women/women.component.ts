import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banners:any[] = [
    {
      _id:1,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/bannersItems/banner1.jpg',
    },
    {
      _id:2,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/bannersItems/banner2.jpeg',
    }
  ]

  perfumes:any[] = [
    {
      _id:1,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/perfumes/perfume1.jpeg',
    },
    {
      _id:2,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/perfumes/perfume2.jpeg',
    },
    {
      _id:3,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/perfumes/perfume3.jpeg',
    },
    {
      _id:4,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/perfumes/perfume4.jpeg',
    }
  ]

  offers:any[] = [
    {
      _id:1,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer13.jpeg',

    },
    {
      _id:2,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer14.jpeg',

    },
    {
      _id:3,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer15.jpeg',

    },
    {
      _id:4,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer16.jpeg',

    },
    {
      _id:5,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer5.jpg',

    },
    {
      _id:6,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer6.jpg',

    },
    {
      _id:7,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer13.jpg',

    },
    {
      _id:8,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer14.jpg',
    },
    {
      _id:9,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer15.jpg',
    },
    {
      _id:10,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer16.jpg',
    },
    {
      _id:11,
      routerLink:'#',
      title:'dummy text',
      image:'../../../assets/images/products/womenOffer/nw1.webp',
    }
  ]

  womenOffers:any[] = [
    {
      _id:1,
      routerLink:'#',
      title:'2 PCS UNSTICHED SHIRT & TROUSER',
      image:'./assets/images/products/womenOffer/womenOffer1.jpg',

    },
    {
      _id:2,
      routerLink:'#',
      title:'2 PCS UNSTICHED SHIRT & DUPATTA',
      image:'./assets/images/products/womenOffer/womenOffer2.jpg',

    },
    {
      _id:3,
      routerLink:'#',
      title:'3 PCS UNSTICHED',
      image:'./assets/images/products/womenOffer/womenOffer3.jpg',

    },
    {
      _id:4,
      routerLink:'#',
      title:'KURTI',
      image:'../../../assets/images/products/womenOffer/OFF1.webp',

    },
    {
      _id:5,
      routerLink:'#',
      title:'FOOTWEAR',
      image:'../../../assets/images/products/womenOffer/OFF2.webp',

    }
  ]

  infants:any[] =[
    {
      _id:1,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:' 4500',
      priceDis:' 4500',
      image:'../../../assets/images/products/womenOffer/22.1.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]


    },
    {
      _id:2,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/22.2.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:3,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/22.3.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:4,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/22.4.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:5,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/22.5.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:6,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/22.6.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:7,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/22.7.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:8,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/22.8.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:9,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/22.9.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:10,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/22.10.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:11,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'BEAUTIFUL by Shaniera Akram BEAUTIFUL by Shaniera Akram',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/ff.1.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:12,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'JANAN POUR FEMME',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/ff2.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:13,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'BLOOM',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/ff3.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:14,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'J. POUR FEMME',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/ff4.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:15,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WASIM AKRAM 502 FOR HER',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womenOffer/ff.5.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    }
  ]

  womenFootwears:any[] =[
    {
      _id:1,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear6.jpeg',

    },
    {
      _id:2,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear7.jpeg',
    },
    {
      _id:3,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear8.jpeg',
    },
    {
      _id:4,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear9.jpeg',
    },
    {
      _id:5,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear10.jpeg',
    }
  ]

  products:any[] =[
    {
      _id:1,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/womenFootwear1.jpeg',


    },
    {
      _id:2,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/02.jpg"
    },
    {
      _id:3,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/03.jpg"
    },
    {
      _id:4,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/04.jpg"
    },
    {
      _id:5,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/05.jpg"
    },
    {
      _id:6,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/06.jpg"
    },
    {
      _id:7,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/07.jpg"
    },
    {
      _id:8,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/08.jpg"
    },
    {
      _id:9,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/09.jpg"
    },
    {
      _id:10,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/10.jpg"
    },
    {
      _id:11,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JJIKP-43146',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/11.jpg"
    },
    {
      _id:12,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/12.jpg"
    },
    {
      _id:13,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/13.jpg"
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

  // getInfantId2(index: number): string {
  //   if(index === 0) {
  //     return 'item-5';
  //   } else if(index === 1) {
  //     return 'item-6'
  //   } else if(index===2) {
  //     return 'item-7'
  //   } else if(index===3) {
  //     return 'item-8'
  //   } else {
  //     return 'item-9'
  //   }
  // }

}
