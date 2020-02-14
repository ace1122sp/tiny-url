const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');
const router = require('./router');
const config = require('../config');

const { port } = config.app;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', router);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({ message: 'Server Error' });

});
db.connect(config.db.mongoURI)
  .then(() => {
    console.log('-- connected to the database --');
    app.listen(port, () => {
      console.log(`-- server listening at port ${port} --`);
    });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });