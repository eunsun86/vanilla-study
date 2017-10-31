const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const { ENCRYPTION_KEY } = require('../../config/credentials.json');

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
              date: dates.join('-'),
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

  if (req.query.edit === 'true') {
    console.log(req.query);
    res.render('delete-reservation', {
      seat_number: req.query['seat-number'],
      date: req.query.dates,
      username: req.query.username
    });
  } else {
    res.render('reservation', {
      seat_number: req.query['seat-number'],
      date: req.query.dates
    });
  }
});

router.post('/reservation', (req, res, next) => {
  if (!req.body.username || !req.body.date || !req.body.seat_number) {
    res.render('error');
    return;
  }

  Reservation.findOne({
    date: req.body.date,
    seat_number: req.body.seat_number
  }).exec((error, reservation) => {
    if (error) {
      console.error("[ERROR]:" + error);
      res.sendStatus(500);
    } else if (reservation === null) {
      var reservation = new Reservation();

      reservation.date = req.body.date;
      reservation.username = req.body.username;
      reservation.seat_number = req.body.seat_number;

      const hashDigest = sha256(req.body.password);
      const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, ENCRYPTION_KEY));

      reservation.password = hmacDigest;

      reservation.save()
        .then((data) => {
          console.log("[DATA]:" + data);
          res.render('success');
        })
        .catch((error) => {
          console.error("[ERROR]:" + error);
          res.render('error');
        });
    } else {
      res.render('error');
    }
  });
});

router.delete('/reservation', (req, res, next) => {
  const hashDigest = sha256(req.body.password);
  const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, ENCRYPTION_KEY));

  Reservation.findOne({
    date: req.body.date,
    username: req.body.username,
    seat_number: req.body.seat_number,
    password: hmacDigest
  }).exec((error, reservation) => {
    if (error) {
      console.error("[ERROR]:" + error);
      res.sendStatus(500);
    } else if (reservation === null) {
      console.log("[DATA]: NOT FOUND");
      res.sendStatus(404);
    } else {
      reservation.remove((error) => {
        if (error) {
          console.error("[ERROR]:" + error);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
});

router.get('/error', (req, res, next) => {
  res.render('error');
});

router.get('/success', (req, res, next) => {
  res.render('success');
});
