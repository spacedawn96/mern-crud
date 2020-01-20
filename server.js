const express = require('express');
const mongoose = require('mongoose');
const app = express();

const router = require('./routes/index');

app.use(express.json());

mongoose
  .connect('', {
    useNewUrlParser: true,
    useCreateIndex: true,
    seUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api', router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
