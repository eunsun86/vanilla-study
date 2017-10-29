const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';
const credentials = require('./credentials.json');

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'vanilla-study'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://develop:${credentials.db[env]}@ds227865.mlab.com:27865/seater_development`
  },

  test: {
    root: rootPath,
    app: {
      name: 'vanilla-study'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://develop:${credentials.db[env]}@ds227865.mlab.com:27865/seater_development`
  },

  production: {
    root: rootPath,
    app: {
      name: 'vanilla-study'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://production:${credentials.db[env]}@ds227565.mlab.com:27565/seater_production`
  }
};

module.exports = config[env];
