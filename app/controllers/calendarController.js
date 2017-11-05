const logger = require('../helpers/logger');

module.exports = (router) => {
  router.get('/calendar', (req, res, next) => {
    logger.info('[LOG] Rendering calender view.');
    res.render('calendar');
  });
};
