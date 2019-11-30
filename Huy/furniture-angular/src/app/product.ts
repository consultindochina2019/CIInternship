export class Product {
    name: string;
    price : number;
    type : string;
    src : string;
    amout: number;
    constructor(name,price,type,src)
    {
        this.name = name;
        this.price = price;
        this.type = type;
        this.src = src;
        this.amout = 1;
    }
}
