import { Product } from "../model/Product";

export interface ProductRepository {

    create(product: Product): void;
    listAll(): void;
    findById(id: number): void;
    update(product: Product): void;
    delete(id: number): void;

}