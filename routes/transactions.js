import express from 'express';
import validate from 'express-validation';

import Transaction from '../models/Transaction';
import transactionValidationRules from '../validation/transaction';
import store from '../store';

const router = express.Router();

/**
 * Get list of all transactions
 */
router.get('/', (req, res, next) => {
  res.json(store.getTransactions());
});

/**
 * Add transaction
 */
router.post('/', validate(transactionValidationRules), (req, res, next) => {
  const transaction = new Transaction(req.body);
  store.recalculateBalance();
  if (!store.canAddTransaction(transaction)) {
    res.status(400).json({ message: 'Not enough money' });
    return;
  }

  store.addTransaction(transaction);
  res.sendStatus(200);
});

export default router;
