const winston = require('winston');
require('winston-papertrail').Papertrail;

var winstonPapertrail = new winston.transports.Papertrail({
  host: 'logs6.papertrailapp.com',
  port: 39635,
  colorize: true
});

// Handle, report, or silently ignore connection errors and failures
winstonPapertrail.on('error', function(err) {
  console.error('[WINSTON ERROR]:', err);
});

winstonPapertrail.on('connect', function (err) {
  logger.info('[LOG]: Closing Papertrail connection.');
});

var logger = new winston.Logger({
  transports: [winstonPapertrail]
});

module.exports = logger;
