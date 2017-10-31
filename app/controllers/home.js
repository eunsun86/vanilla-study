const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  res.redirect('/calendar');
});

router.get('/calendar', (req, res, next) => {
  res.render('calendar');
});

router.get('/seating-map', (req, res, next) => {
  var dates = req.query.date ? req.query.date.split('-') : [];

  if (dates.length !== 3) {
    res.render('error');
    return;
  } else if (typeof Number(dates[0]) !== 'number' ||
             typeof Number(dates[1]) !== 'number' ||
             typeof Number(dates[2]) !== 'number')
  {
    res.render('error');
    return;
  }

  Reservation.find({ date: dates.join('-') }).sort('seat_number')
    .exec((error, reservations) => {
      if (error) {
        res.render('error');
      } else {
        var existingReservations = [];

        reservations.forEach((reservation) => {
          existingReservations[reservation.seat_number - 1] = reservation;
        });

        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].forEach((seat) => {
          if (!existingReservations[seat]) {
            existingReservations[seat] = {
              seat_number: seat + 1,
              dates: dates.join('-'),
              username: null
            };
          }
        });

        res.render('seating-map', {
          tableOne: existingReservations.slice(0, 4),
          tableTwo: existingReservations.slice(4, 8),
          tableThree: existingReservations.slice(8, 10),
          tableFour: existingReservations.slice(10, 14),
          tableFive: existingReservations.slice(14, 18),
          tableSix: existingReservations.slice(18, 20)
        });
      }
    });
});

router.get('/reservation', (req, res, next) => {
  if (Number(req.query['seat-number']) > 20 || Number(req.query['seat-number']) < 1) {
    res.render('error');
    return;
  }

  res.render('reservation', {
    seat_number: req.query['seat-number'],
    date: req.query.dates
  });
});

router.post('/reservation', (req, res, next) => {
  if (!req.body.username || !req.body.reservation_date || !req.body.seat_number) {
    res.render('error');
    return;
  }

  var reservation = new Reservation();

  reservation.date = req.body.reservation_date;
  reservation.username = req.body.username;
  reservation.seat_number = req.body.seat_number;

  reservation.save()
    .then((data) => {
      console.log(data);
      res.render('success');
    })
    .catch((error) => {
      console.error(error);
      res.render('error');
    });
});
