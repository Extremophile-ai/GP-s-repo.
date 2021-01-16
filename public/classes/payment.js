// classes
export class Payment {
    constructor(recipient, details, amount, time) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.time = time;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details} as at ${this.time}`;
    }
    ;
}
