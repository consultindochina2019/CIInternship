export class Product {
    name: string;
    price : number;
    type : string;
    src : string;
    amout: number;
    constructor(name?: string, price?: number, type?: string, src?: string)
    {
        this.name = name;
        this.price = price;
        this.type = type;
        this.src = src;
        this.amout = 1;
    }
}

export class ProductNew {
    name: string;
    price : number;
    type : string;
    src : string;
    amout: number;

    constructor(init?:Partial<ProductNew>)
    {
        Object.assign(this, init);
    }
}