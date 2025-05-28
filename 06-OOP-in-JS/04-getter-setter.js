class BankAccount {
  #balance = 0;                // private field
  constructor(owner) {
    this.owner = owner;
  }

  get balance() {              // read-only interface
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }
}

const acc = new BankAccount("Shivam");
acc.deposit(5000);
console.log("account balance of", acc.owner, "is", acc.balance);
console.log(`Account balance of ${acc.owner} is ${acc.balance}`);
