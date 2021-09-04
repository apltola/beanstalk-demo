const express = require('express');
const { pool } = require('./db/client');
const { peopleRouter } = require('./routes/people');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(peopleRouter);

app.get('/envit', (req, res) => {
  res.json({
    pguser: process.env.PGUSER,
    pgpass: process.env.PGPASSWORD,
    pghost: process.env.PGHOST,
    pgport: process.env.PGPORT,
    pgdb: process.env.PGDATABASE,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server listening at', PORT);
});

pool.query('SELECT * FROM people', (err, res) => {
  if (res.rows) {
    console.log('* from people => ', res.rows);
  }
  console.log('hello');
});
