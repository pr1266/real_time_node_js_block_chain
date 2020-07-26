class Transaction{
    constructor(sender, reciever, amount, currency){
        this.sender = sender;
        this.reciever = reciever;
        this.amount = amount;
        this.currency = currency;
        this.timestamp = Date.now();
    }
}


module.exports = Transaction;