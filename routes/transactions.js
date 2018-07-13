import express from 'express';
import validate from 'express-validation';

import Ledger from '../models/Ledger';
import Transaction from '../models/Transaction';
import transactionValidationRules from '../validation/transaction';

const userLedger = new Ledger();

const router = express.Router();

/**
 * Get list of all transactions
 */
router.get('/', (req, res, next) => {
  res.json(userLedger.getTransactions());
});

/**
 * Add transaction
 */
router.post('/', validate(transactionValidationRules), (req, res, next) => {
  const transaction = new Transaction(req.body);
  userLedger.recalculateBalance();
  if (!userLedger.canAddTransaction(transaction)) {
    res.json(400, { message: 'Not enough money' });
    return;
  }

  userLedger.addTransaction(transaction);
  res.sendStatus(200);
});

export default router;
