export abstract class Product {

    constructor(
        public id: number,
        public name: string,
        public price: number,
        public stock: number
    ) {}

    abstract description(): string;

}