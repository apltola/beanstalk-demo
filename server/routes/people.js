const { Router } = require('express');
const { pool } = require('../db/client');

const router = Router();

router.get('/people', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM PEOPLE');
    return res.json(rows);
  } catch (error) {
    console.log('get people error', error);
    return {};
  }
});

router.post('/people', async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age)
    return res.status(400).send({ error: 'invalid request body' });

  let rows = [];
  try {
    const res = await pool.query(
      'INSERT INTO people(name, age) VALUES($1, $2) RETURNING *',
      [name, parseInt(age)]
    );
    rows = res.rows;
  } catch (error) {
    console.log(error);
  }
  res.json(rows);
});

module.exports = { peopleRouter: router };
