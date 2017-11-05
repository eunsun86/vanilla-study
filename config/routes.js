/*

  Routes definition

*/

const express = require('express');
const router = express.Router();
const logger = require('../app/helpers/logger');

router.get('/', (req, res, next) => {
  logger.info('[LOG] Redirecting to /calender.');
  res.redirect('/calendar');
});

router.get('/error', (req, res, next) => {
  logger.info('[LOG] Rendering /error');
  res.render('error');
});

router.get('/success', (req, res, next) => {
  logger.info('[LOG] Rendering /success');
  res.render('success');
});

router.get('/mobile-guide', (req, res, next) => {
  logger.info('[LOG] Rendering /mobile-guide');
  res.render('mobile-guide');
});

require('../app/controllers/calendarController')(router);
require('../app/controllers/availabilityController')(router);
require('../app/controllers/reservationController')(router);

module.exports = (app) => {
  app.use('/', router);
};
