import express from 'express';
import wordController from '../controllers/wordController.js';

const router = express.Router();

router.get('/:length', wordController.getWords);

export default router;
