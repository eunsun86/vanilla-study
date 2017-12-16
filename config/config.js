const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'vanilla-study-development'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://vanilla:vanilla@ds059546.mlab.com:59546/vanilla-study`
  },

  production: {
    root: rootPath,
    app: {
      name: 'vanilla-study-production'
    },
    port: process.env.PORT || 3000,
    db: `mongodb://vanilla:vanilla@ds159676.mlab.com:59676/vanilla-study-development`
  }
};

module.exports = config[env];


vaN1LlacOd!nG