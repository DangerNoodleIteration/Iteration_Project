import express from 'express';
import { getWords } from '../controllers/wordController';

const router = express.Router();

router.get('/:number', getWords, (req, res) => {
  res.status(200).json(res.locals.words);
});

export default router;
