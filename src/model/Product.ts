export abstract class Product {

    constructor(
        public _id: number,
        public _name: string,
        public _price: number,
        public _stock: number
    ) {}

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }

    public get stock(): number {
        return this._stock;
    }

    public set stock(stock: number) {
        this._stock = stock;
    }

    abstract description(): string;

}