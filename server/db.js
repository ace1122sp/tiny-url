const mongoose = require('mongoose');

const connect = (uri, cb) =>
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      promiseLibrary: global.Promise,
      useUnifiedTopology: true
    });

module.exports = { connect };
