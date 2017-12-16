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
    db: `mongodb://Vanilla:${DB_PW}@development-shard-00-00-bqwt8.mongodb.net:27017,development-shard-00-01-bqwt8.mongodb.net:27017,development-shard-00-02-bqwt8.mongodb.net:27017/admin?replicaSet=development-shard-0&ssl=true`
  },

  production: {
    root: rootPath,
    app: {
      name: 'vanilla-study-production'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://Vanilla:${DB_PW}@production-shard-00-00-alokq.mongodb.net:27017,production-shard-00-01-alokq.mongodb.net:27017,production-shard-00-02-alokq.mongodb.net:27017/admin?replicaSet=production-shard-0&ssl=true`
  }
};

module.exports = config[env];
