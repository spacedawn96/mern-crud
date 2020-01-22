const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const db = config.get('db');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    seUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/post', require('./routes/index'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
