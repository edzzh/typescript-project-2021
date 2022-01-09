class FoodInformation {
    category: string;
    origin: string;

    constructor(category: string, origin: string) {
        this.category = category;
        this.origin = origin;
    }
}

export class Product extends FoodInformation {
    private productId: number;
    name: string;
    price: number;

    constructor(productId: number, name: string, price: number, category: string, origin: string) {
        super(category, origin);
        this.productId = productId;
        this.name = name;
        this.price = price;
    }
}