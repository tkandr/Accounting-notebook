export default class Ledger {
  /**
   * Do I need to care about terrible JS roundings?
   * Probably store money as cents without having decimals (or some other solutions)
   * is out of scope of 2-3 hours task
   */

  cachedBalance = 0;

  transactions = [];

  getTransactions() {
    return this.transactions;
  }

  addTransaction(transaction) {
    if (!this.canAddTransaction(transaction)) {
      // should never get here
      throw new Error('Trying to add transaction which leeds to negative balance');
    }
    this.transactions.push(transaction);
    this.cachedBalance += transaction.getAmountWithSign();
  }

  canAddTransaction(transaction) {
    return this.getBalance() + transaction.getAmountWithSign() >= 0;
  }

  getBalance() {
    if (this.cachedBalance || this.cachedBalance === 0) {
      return this.cachedBalance;
    }
    return this.recalculateBalance();
  }

  /**
   * Calculates current user balance based on his transactions and store it in cachedBalance
   *
   * @return {number}
   */
  recalculateBalance() {
    this.cachedBalance = this.transactions.reduce((balance, transaction) => {
      return balance + transaction.getAmountWithSign();
    }, 0);
    return this.cachedBalance;
  }
}