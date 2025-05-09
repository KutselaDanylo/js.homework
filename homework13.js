const Transaction ={
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
const account ={
  balance: 0,
  transactions: [],
  createTransaction(amount, type){
    return {
      id: this.transactions.length + 1,
      amount,
      type,
    };
  },
  deposit(amount){
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },
  withdraw(amount){
    if (amount > this.balance){
      console.log('Недостатньо коштів для зняття');
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },
  getBalance(){
    return this.balance;
  },
  getTransactionDetails(id){
    const transaction = this.transactions.find(t => t.id === id);
    if (!transaction) return null;
    const { id: transactionId, amount, type } = transaction;
    return { transactionId, amount, type };
  },
  getTransactionTotal(type){
    return this.transactions
      .filter(({ type: t }) => t === type)
      .reduce((total, { amount }) => total + amount, 0);
  },
};
account.deposit(500);
account.withdraw(200);
account.deposit(300);
account.withdraw(1000);
console.log('Поточний баланс:', account.getBalance()); 
console.log('Транзакція №2:', account.getTransactionDetails(2)); 
console.log('Усі транзакції:', account.transactions);
console.log('Загальна сума депозитів:', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('Загальна сума зняття:', account.getTransactionTotal(Transaction.WITHDRAW));
