import {BaseClient} from "./classes/BaseClient";
import {Customer} from "./classes/Customer";
import {Product} from "./classes/Product";
import {Cart} from "./classes/Cart";
import axios, {AxiosError} from "axios";
import * as _ from "lodash";

interface RandomUser {
    first_name: string,
    last_name: string,
    address: string,
    email: string,
    phone_number: string
}

interface Store {
    name: string,
    location: string,
    phoneNumber: string,
    description?: string,
    owner?: string
}

let randomUser: RandomUser;

const baseClient1 = new BaseClient("https://random-data-api.com/api/", "/users/random_user");

/**
 * Method to receive a random user object from an API call
 */
const getRandomUser = new Promise<RandomUser>((resolve, reject) => {
    return baseClient1.get<RandomUser>().then(res => {
        const {first_name, last_name, address, email, phone_number} = res.data;
        return {
            first_name,
            last_name,
            address,
            email,
            phone_number
        };
    }).then(userData => {
        resolve(userData);
    }).catch((e: Error | AxiosError) => {
        if (axios.isAxiosError(e)) {
            console.log("---AXIOS ERROR---")
            console.log(e.message);
        } else {
            console.log('Plain Error Message');
            console.log(e.message);
        }

        reject(e);
    })
});

getRandomUser.then(user => {
    randomUser = user;
})

/**
 * Wait 5 sec after async calls to proceed with logic
 */
setTimeout(() => {
    const customer1 = new Customer(
        1,
        randomUser.first_name,
        randomUser.last_name,
        randomUser.phone_number,
        randomUser.email
    );

    customer1.printClientInformation();

    /**
     * Creating *N products for a Customer's cart
     */
    const productArray: Product[] = [];

    const product1 = new Product(1, "banana", 1.22, "fruit", "Brazil");
    productArray.push(product1);
    const product2 = new Product(1, "strawberry", 3.77, "fruit", "Poland");
    productArray.push(product2);
    const product3 = new Product(1, "milk", 0.89, "dairy", "Latvia");
    productArray.push(product3);
    const product4 = new Product(1, "ham", 1.99, "meat", "Lithuania");
    productArray.push(product4);

    /**
     * Check how much products are in the customer's cart and what is their total price in the end
     */
    const cart1 = new Cart(1, productArray);
    cart1.existingProductsInCart();

    console.log(`Total Price: ${cart1.totalPrice()}$`);

    /**
     * Check lodash functionality after module augmentation
     */
    console.log("\n-------------Lodash Module Augmentation------------");
    console.log(_.filter(productArray, {'category': 'fruit'}));
    console.log(_.filter(productArray, ['name', 'milk']));

    /**
     * Utility usage
     */
    console.log("\n-------------Utility Example------------");
    const store1: Partial<Store> = {
        name: "Lats",
        location: "Riga"
    };

    console.log("Partial Utility: ", store1);

    const store2: Required<Store> = {
        name: "Elvi",
        location: "Kuldiga",
        phoneNumber: "+371 299339944",
        description: "Elvi is a very popular local store in Kurzeme",
        owner: "Janis Slieka"
    };

    console.log("Required Utility: ", store2);

    const store3: Pick<Store, "name" | "location" | "owner"> = {
        name: "Lats",
        location: "Riga",
        owner: "Bobs Lielais"
    };

    console.log("Pick Utility: ", store3);
}, 5000);
