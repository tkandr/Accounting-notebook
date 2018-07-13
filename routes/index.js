import express from 'express';

const router = express.Router();
let visits = 0;
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express', visits: ++visits });
});

export default router;
