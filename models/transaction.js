class Transaction{
    constructor(sender, reciever, amount){
        this.sender = sender;
        this.reciever = reciever;
        this.amount = amount;
        this.timestamp = Date.now();
    }
}


module.exports = Transaction;