// classes
export class Invoice {
    constructor(client, details, amount, time) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.time = time;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details} as at ${this.time}`;
    }
    ;
}
