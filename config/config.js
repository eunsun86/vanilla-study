const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';
const DB_PW = process.env.DB_PW;

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'vanilla-study-development'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://Vanilla:${DB_PW}@development-shard-00-00-138f2.mongodb.net:27017,development-shard-00-01-138f2.mongodb.net:27017,development-shard-00-02-138f2.mongodb.net:27017/vanilla-study-development?ssl=true&replicaSet=Development-shard-0&authSource=admin`
  },

  production: {
    root: rootPath,
    app: {
      name: 'vanilla-study-production'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://Vanilla:${DB_PW}@production-shard-00-00-138f2.mongodb.net:27017,production-shard-00-01-138f2.mongodb.net:27017,production-shard-00-02-138f2.mongodb.net:27017/vanilla-study-production?ssl=true&replicaSet=Production-shard-0&authSource=admin`
  }
};

module.exports = config[env];
