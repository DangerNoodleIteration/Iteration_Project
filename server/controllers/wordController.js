import db from '../model/wordModel.js';

const wordController = {};

wordController.getWords = async (req, res) => {
  const wordLength = parseInt(req.params.length);
  try {
    const result = await db.query(
      `SELECT words FROM first_level WHERE length = ${wordLength}`
    );
    console.log(result);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No word found' });
    }
    res.status(200).json(result[rows]);
  } catch (err) {
    console.error('❌ SQL error:', err.message);
    res.status(500).json({ error: 'Database query failed' });
  }
};

export default wordController;
