const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';
const DB_PASSWORD = process.env.DB_PASSWORD;

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'vanilla-study'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://develop:${DB_PASSWORD}@ds227865.mlab.com:27865/seater_development`
  },

  test: {
    root: rootPath,
    app: {
      name: 'vanilla-study'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://develop:${DB_PASSWORD}@ds227865.mlab.com:27865/seater_development`
  },

  production: {
    root: rootPath,
    app: {
      name: 'vanilla-study'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://production:${DB_PASSWORD}@ds227565.mlab.com:27565/seater_production`
  }
};

module.exports = config[env];
