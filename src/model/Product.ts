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

    // abstract description(): string;

    // vender
    public sell(quantity: number): boolean {
        if (this._stock < quantity) {
            console.log("\nEstoque insuficiente!");
            return false;
        }
        this._stock -= quantity;
        return true;
    }

    // reabastecer
    public restock(quantity: number): void {
        this._stock += quantity;
    }

    public view() : void {
        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("ID: " + this._id);
        console.log("Nome: " + this._name);
        console.log("Preço: R$ " + this._price.toFixed(2));
        console.log("Estoque: " + this._stock);
    }

}