import {Product} from "./Product";

export class Cart {
    private cartId: number;
    productArray: Product [] = [];

    constructor(cartId: number, productArray: Product[]) {
        this.cartId = cartId;
        this.productArray = productArray;
    }

    totalPrice(productArray: Product[]): number {
        let price = 0;

        for (let i = 0; i < this.productArray.length; i++) {
            price += this.productArray[i].price;
        }

        return price;
    }

    existingProductsInCart(): void {
        console.log("----------All Products In The Cart------")
        console.log(`Size of cart: ${this.productArray.length}`);
        for (let i = 0; i < this.productArray.length; i++) {
            console.log("----------------------------------------");
            console.log(`Product Name: ${this.productArray[i].name.toLocaleUpperCase()}`);
            console.log(`Product Price: ${this.productArray[i].price}$`);
            console.log(`Product Category: ${this.productArray[i].category.toLocaleUpperCase()}`);
            console.log(`Product Origin: ${this.productArray[i].origin.toLocaleUpperCase()}`);
            console.log("----------------------------------------");
        }
    }
}