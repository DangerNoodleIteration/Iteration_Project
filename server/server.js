import express from 'express';
import wordRouter from './routes/words.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('TEST');
});
app.use(express.json());
app.use('/api/words', wordRouter);

app.listen(PORT, () => {
  console.log(`👌 Server running on port ${PORT}`);
});
