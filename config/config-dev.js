const { DEVELOPMENT, LOCAL_PORT } = require('../server/constants');

module.exports = {
  app: {
    port: LOCAL_PORT,
    env: DEVELOPMENT
  },
  db: {
    mongoURI: "mongodb://localhost:27017/tiny-url"
  }
};