const logger = require('../helpers/logger');
const Reservation = require('../models/Reservation');

const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');

const nodemailer = require('nodemailer');
const { getEmailTemplate } = require('../helpers');
const ENCRYPTION_KEY = "VAnILla__cOd!nG!";
const GMAIL_PW = process.env.GMAIL_PW;

module.exports = (router) => {
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
                  user: 'admin@vanillacoding.co',
                  pass: GMAIL_PW
                }
              });

              const mailOptions = {
                from: 'admin@vanillacoding.co',
                to: req.body.email,
                bcc: 'admin@vanillacoding.co',
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
};
