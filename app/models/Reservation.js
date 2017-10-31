// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  date: String,
  seat_number: Number,
  username: String,
  password: String
});

module.exports = mongoose.model('Reservation', ReservationSchema);
