const { PRODUCTION } = require('../server/constants');

module.exports = (() => {
  const env = process.env.NODE_ENV;

  if (env === PRODUCTION) return require('./config-prod');
  return require('./config-dev');
})();
