import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

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
      image:'../../../assets/images/products/men/of1.webp',

    },
    {
      _id:2,
      routerLink:'#',
      title:'dummy text',
      image:'../../../assets/images/products/men/of2.webp',

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
      image:'../../../assets/images/products/men/of8.webp',
    }
  ]

  menOffers:any[] = [
    {
      _id:1,
      routerLink:'#',
      title:'UNSTITCHED',
      image:'../../../assets/images/products/men/of3.webp',

    },
    {
      _id:2,
      routerLink:'#',
      title:'FOOTWEAR',
      image:'../../../assets/images/products/men/of4.webp',

    },
    {
      _id:3,
      routerLink:'#',
      title:'PRINCE COAT',
      image:'../../../assets/images/products/men/of5.webp',

    },
    {
      _id:4,
      routerLink:'#',
      title:'WAISTCOAT',
      image:'../../../assets/images/products/men/of6.webp',

    },
    {
      _id:5,
      routerLink:'#',
      title:'WEDDING',
      image:'../../../assets/images/products/men/of7.webp',

    }
  ]

  infants:any[] =[
    {
      _id:1,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CLASSIQUE POUR HOMME | ADNAN SIDDIQUI',
      price:' 4500',
      priceDis:' 4500',
      image:'../../../assets/images/products/men/p1.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]


    },
    {
      _id:2,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'SUPER STAR POUR HOMME | HUMAYUN SAEED',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p2.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:3,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PARIS Pour Homme',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p3.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:4,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'LONDON Pour Homme',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p4.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:5,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'MOSCOW Pour Homme',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p5.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:6,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'SEA GREEN BLENDED KURTA | JJK-43137',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p6.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:7,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'BROWN COTTON KURTA | JJK-S-32589',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p7.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:8,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'BLACK COTTON KURTA | JJK-45013',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p8.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:9,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KURTA | JJK-45012',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p9.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:10,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE SCHIFFLI KURTA | JJK-A-43080',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p10.webp',
      productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:11,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'NAVY BLUE BLENDED MEN CAP | JJ-CAP-0038',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p11.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:12,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'BROWN BLENDED MEN CAP | JJ-CAP-0037',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p12.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:13,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'LIGHT GREY BLENDED MEN CAP | JJ-CAP-0036',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p13.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:14,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'NAVY BLUE BLENDED MEN CAP | JJ-CAP-0006-R11',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p14.webp',
      // productSize: ["S", "M", "L", "XL", "XL","XS"]
    },
    {
      _id:15,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'NAVY BLUE BLENDED MEN CAP | JJ-CAP-0005-R47',
      price:' 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/men/p15.webp',
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
