import Joi from 'joi';

import TRANSACTION_TYPES from '../constants/transactionTypes';

export default {
  body: {
    amount: Joi.number().precision(2).positive().required(),
    type: Joi.string().allow(Object.values(TRANSACTION_TYPES)).required(),
  },
};
