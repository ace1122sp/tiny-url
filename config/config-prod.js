const { PRODUCTION } = require('../server/constants');

module.exports = {
  app: {
    port: process.env.PORT,
    env: PRODUCTION
  },
  db: {
    mongoURI: process.env.mongoURI
  }
};