const logger = require('../helpers/logger');
const Reservation = require('../models/Reservation');
const dateValidator = require('../middlewares/validator').dateValidator;
const waterfall = require('async/waterfall');

module.exports = (router) => {
  router.get('/availability', (req, res, next) => {
    logger.info('[LOG] Processing /availability.');

    waterfall([
      function validateDate (callback) {
        try {
          var dates = dateValidator(req.query.date);
          callback(null, dates);
        } catch (error) {
          callback(error);
        }
      },
      function checkForReservation (dates, callback) {
        logger.info('[LOG] Checking for existing reservations: Date ' + req.query.date);

        Reservation.find({ date: dates.join('-') }).sort('seat_number')
          .exec((error, reservations) => {
            callback(error, dates, reservations);
          });
      }
    ],
    function onReservationQueryComplete (error, dates, reservations) {
      logger.info('[LOG] Reservation info query completed: ' + reservations);

      if (error) {
        return next(error);
      }

      var existingReservations = [];

      reservations.forEach((reservation) => {
        existingReservations[reservation.seat_number - 1] = reservation;
      });

      for (var i = 0; i < 20; i++) {
        if (!existingReservations[i]) {
          existingReservations[i] = {
            seat_number: i + 1,
            date: dates.join('-'),
            username: null
          };
        }
      }

      logger.info('[LOG] Rendering /availability');

      res.render('availability', {
        tableOne: existingReservations.slice(0, 4),
        tableTwo: existingReservations.slice(4, 8),
        tableThree: existingReservations.slice(8, 10),
        tableFour: existingReservations.slice(10, 14),
        tableFive: existingReservations.slice(14, 18),
        tableSix: existingReservations.slice(18, 20)
      });
    });
  });
};
