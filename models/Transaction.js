import uuid from 'uuid/v1';
import moment from 'moment';

import TRANSACTION_TYPES from '../constants/transactionTypes';

export default class Transaction {
  constructor({ amount, type }) {
    this.id = uuid();
    this.type = type;
    this.amount = amount;
    this.effectiveDate = moment().format('YYYY-MM-DD hh:mm:ss');
  }

  /**
   * Returns amount as non absolute value, with sign depended on transaction type
   *
   * TL;DR;
   * As I can see in PrivatBank transactions, they store amount as simple number
   * and absolute value they store as originalAmount, but we need to follow PredefinedAPI
   *
   * @return {number} - amount or negative amount if transaction type is debit
   */
  getAmountWithSign() {
    return this.type === TRANSACTION_TYPES.CREDIT ? this.amount : -this.amount;
  }

}
