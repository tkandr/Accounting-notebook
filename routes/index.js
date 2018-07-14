import express from 'express';
import { format } from 'currency-formatter';

import store from '../store';

const formatter = amount => format(amount, { code: 'USD' });
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { transactions: store.getTransactions(), formatter });
});

export default router;
