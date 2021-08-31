const { Router } = require('express');
const { pgClient } = require('../db/client');

const router = Router();

router.get('/people', async (req, res) => {
  const { rows } = await pgClient.query('SELECT * FROM PEOPLE');
  res.json(rows);
});

router.post('/people', async (req, res) => {
  console.log('req', req.body);
  res.json(req.body);
});

module.exports = { peopleRouter: router };
