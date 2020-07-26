class Transaction{
    constructor(sender, receiver, amount, currency){
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
        this.currency = currency;
        this.timestamp = Date.now();
    }
}

module.exports = Transaction;