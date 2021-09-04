const { Router } = require('express');
const { pgClient } = require('../db/client');

const router = Router();

router.get('/people', async (req, res) => {
  const { rows } = await pgClient.query('SELECT * FROM PEOPLE');
  res.json(rows);
});

router.post('/people', async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age)
    return res.status(400).send({ error: 'invalid request body' });

  let rows = [];
  try {
    const res = await pgClient.query(
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
