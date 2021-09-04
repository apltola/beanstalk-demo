const express = require('express');
const { peopleRouter } = require('./routes/people');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(peopleRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server listening at', PORT);
});
