export class Customer {
    private customerId: number;
    static customerCount: number;
    name: string;
    address: string;
    phoneNumber: string;
    readonly email: string;

    constructor(customerId: number, name: string, address: string, phoneNumber: string, email: string) {
        Customer.customerCount += 1;
        this.customerId = customerId;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    printClientInformation(): void {
        console.log("----------Client Information----------");
        console.log(`Name: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`Phone Number: ${this.phoneNumber}`);
        console.log(`Email: ${this.email}`);
        console.log("----------------------------------------");
    }
}
