import { Component, OnInit } from '@angular/core';

import { Product } from './../product';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  
  
  public products = [
    new Product("Long Red Chairs",1000,"Chair","../../assets/img/hinh1.PNG"),
    new Product("Long Green Chairs",1000,"Table","../../assets/img/hinh2.PNG"),
    new Product("Short Red Chairs",1000,"Sofas","../../assets/img/hinh3.PNG"),
    new Product("Short Purple Chairs",1000,"Sofas","../../assets/img/hinh4.PNG"),
    new Product("Long Red Chairs",1000,"Chair","../../assets/img/hinh1.PNG"),
    new Product("Long Green Chairs",1000,"Table","../../assets/img/hinh2.PNG"),
    new Product("Short Red Chairs",1000,"Sofas","../../assets/img/hinh3.PNG"),
    new Product("Short Purple Chairs",1000,"Sofas","../../assets/img/hinh4.PNG"),
    new Product("Long Red Chairs",1000,"Chair","../../assets/img/hinh1.PNG"),
    new Product("Long Green Chairs",1000,"Table","../../assets/img/hinh2.PNG"),
    new Product("Short Red Chairs",1000,"Sofas","../../assets/img/hinh3.PNG"),
    new Product("Short Purple Chairs",1000,"Sofas","../../assets/img/hinh4.PNG"),
  ];
  public link = "../../assets/img/hinh4.PNG";
  public data = [];
  // TODO: Should be enum
  public typeProducts = ["All","Chair","Table","Sofas"];
  public dataSelected = new Product();
  public sum : number;
  public bill = [];
 
  public isHidden: boolean;
  public cart = [];
 
  public selectedType: string;

  p: number = 1;
  count: number = 5;

  constructor() { 
    this.data = this.products;
  }

  ngOnInit() {
    this.isHidden = false;

    this.selectedType = this.typeProducts[0];

    if(localStorage.getItem('Bill') !== null)
      this.bill = JSON.parse(localStorage.getItem('Bill'));
    localStorage.setItem('Bill',JSON.stringify(this.bill));
  }

  filter(str : string){
    // this.selectedType = (str === "Home") ? "" : str;
    this.selectedType = str;
    this.data = this.products.filter(e=>{
      return e.type===str || str === "All";
    })

  }

  show(product: Product){
    // TODO: Should update to new product class
    this.dataSelected = new Product(product.name, product.price, product.type, product.src);
  }

  addCart(product: Product)
  {
    var val = false;
    
    this.cart.forEach(e=>{
      if(e.name == product.name)
      {
        e.amout += product.amout;
        val = true;
      }
    })

    // TODO: Should comment the logic for next time (others) understand easier
    if(!val)
      this.cart.push(product);
  }

  showCart()
  {
    this.calculatorSum();
    // TODO: Update name => isHiddenProductDetail
    this.isHidden = true;
  }

  calculatorSum()
  {
    this.sum = 0;
    this.cart.forEach(e=>{
      this.sum += e.amout * e.price;
    })
  }

  decreaseAmout(product : Product)
  { 
    if(product.amout != 0)
      product.amout--;
    this.calculatorSum();
  }

  increaseAmout(product : Product)
  {
    product.amout++;
    this.calculatorSum();
  }

  purchase()
  {
    if(this.cart.length !== 0)
      this.bill.push(this.cart);
    localStorage.setItem('Bill',JSON.stringify(this.bill));
    this.cart = [];
    this.isHidden = false;
    alert("Thanh Toán Thành Công");
  }
}
