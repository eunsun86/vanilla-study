const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const nodemailer = require('nodemailer');
const { getEmailTemplate } = require('../helpers');
const ENCRYPTION_KEY = "VAnILla__cOd!nG!";
const GMAIL_PW = process.env.GMAIL_PW;
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

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  logger.info('[LOG] Redirecting to /calender.');
  res.redirect('/calendar');
});

router.get('/calendar', (req, res, next) => {
  logger.info('[LOG] Rendering calender view.');
  res.render('calendar');
});

router.get('/seating-map', (req, res, next) => {
  logger.info('[LOG] Processing /seating-map.');

  var dates = req.query.date ? req.query.date.split('-') : [];

  if (dates.length !== 3) {
    logger.error('[ERROR] Invalid date query string.');
    res.render('error');
    return;
  } else if (typeof Number(dates[0]) !== 'number' ||
             typeof Number(dates[1]) !== 'number' ||
             typeof Number(dates[2]) !== 'number')
  {
    logger.error('[ERROR] Invalid date query string.');
    res.render('error');
    return;
  }

  logger.info('[LOG] Checking for existing reservations: Date ' + req.query.date);

  Reservation.find({ date: dates.join('-') }).sort('seat_number')
    .exec((error, reservations) => {
      if (error) {
        logger.error('[ERROR] MongoDB query error: ' + error);
        res.render('error');
      } else {
        logger.info('[LOG] Reservation info query completed: ' + reservations);

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

        logger.info('[LOG] Rendering /seating-map');

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
    logger.error('[ERROR] Invalid seat number: Range is 1 - 20.');
    res.render('error');
    return;
  }

  if (req.query.edit === 'true') {
    logger.info('[LOG] Rendering /delete-reservation: Date ' + req.query.dates + ' Seat ' + req.query['seat-number'] + ' User ' + req.query.username);
    res.render('delete-reservation', {
      seat_number: req.query['seat-number'],
      date: req.query.dates,
      username: req.query.username
    });
  } else {
    logger.info('[LOG] Rendering /reservation: Date ' + req.query.dates + ' Seat ' + req.query['seat-number']);
    res.render('reservation', {
      seat_number: req.query['seat-number'],
      date: req.query.dates
    });
  }
});

router.post('/reservation', (req, res, next) => {
  if (!req.body.username || !req.body.date || !req.body.seat_number || !req.body.password) {
    logger.error('[ERROR] Invalid post data: ' + req.body);
    res.render('error');
    return;
  }

  Reservation.findOne({
    date: req.body.date,
    seat_number: req.body.seat_number
  }).exec((error, reservation) => {
    if (error) {
      logger.error('[ERROR] MongoDB query error: ' + error);
      res.sendStatus(500);
    } else if (reservation === null) {
      logger.info('[LOG] Creating new reservation.');

      var reservation = new Reservation();

      reservation.date = req.body.date;
      reservation.username = req.body.username;
      reservation.seat_number = req.body.seat_number;
      reservation.email = req.body.email || '';

      const hashDigest = sha256(req.body.password);
      const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, ENCRYPTION_KEY));

      reservation.password = hmacDigest;

      reservation.save()
        .then((data) => {
          logger.info('[LOG] Saved data in DB: ' + data);

          if (req.body.email) {
            let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'ken@vanillacoding.co',
                pass: GMAIL_PW
              }
            });

            const mailOptions = {
              from: 'ken@vanillacoding.co',
              to: req.body.email,
              bcc: 'ken@vanillacoding.co',
              subject: '바닐라 스터디 예약 확정',
              html: getEmailTemplate({
                username: req.body.username,
                date: req.body.date,
                seat_number: req.body.seat_number
              })
            };

            logger.info('[LOG] Sending email.');

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                logger.error('[ERROR] Email send error: ' + error);
                res.render('error');
              } else {
                logger.info('[LOG] Email sent.');
                logger.info('[LOG] Rendering /success');

                res.render('success', {
                  reservation: data
                });
              }
            });
          } else {
            logger.info('[LOG] Rendering /success');

            res.render('success', {
              reservation: data
            });
          }
        })
        .catch((error) => {
          logger.error('[ERROR] MongoDB - Could not save the reservation: ' + error);
          res.render('error');
        });
    } else {
      logger.error('[ERROR] Reservation exists.');
      res.render('error');
    }
  });
});

router.delete('/reservation', (req, res, next) => {
  const hashDigest = sha256(req.body.password);
  const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, ENCRYPTION_KEY));

  logger.info('[LOG] Start deleting reservation: Date ' + req.body.date + ' Seat ' + req.body.seat_number);

  Reservation.findOne({
    date: req.body.date,
    username: req.body.username,
    seat_number: req.body.seat_number,
    password: hmacDigest
  }).exec((error, reservation) => {
    if (error) {
      logger.error('[ERROR] MongoDB - Could not find the reservation: ' + error);
      res.sendStatus(500);
    } else if (reservation === null) {
      logger.info('[LOG] No reservation matching the given information.');
      res.sendStatus(401);
    } else {
      reservation.remove((error) => {
        if (error) {
          logger.error('[ERROR] MongoDB - Could not delete the reservation: ' + error);
          res.sendStatus(500);
        } else {
          logger.info('[LOG] Deleted the reservation.');
          res.sendStatus(200);
        }
      });
    }
  });
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
