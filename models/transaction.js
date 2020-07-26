//TODO ino mizarim baraye transaction ha :
//? sender, reciever, amount, currency ro toosh moshakhas mokonim
//? va time ro ham behesh ezafe mikonim

class Transaction{

    constructor(sender, receiver, amount, currency){
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
        this.currency = currency;
        this.timestamp = Date.now();
    }

    getDetails() {
        const { sender, receiver, amount, currency, timestamp } = this;
        return {
          sender,
          receiver,
          amount,
          currency,
          timestamp,
        };
      }
    
      parseTransaction(transaction) {
        this.sender = transaction.sender;
        this.receiver = transaction.receiver;
        this.amount = transaction.amount;
        this.currency = transaction.currency;
        this.timestamp = transaction.timestamp;
      }
}

module.exports = Transaction;