const _ = require('lodash');
const logger = require('../helpers/logger');
const { BadRequestError } = require('../helpers/errors');

function dateValidator (date) {
  var dates = date.split('-') || [];

  if (dates.length !== 3) {
    logger.error('[ERROR] Invalid date query string.');
    throw new BadRequestError('잘못된 날짜입니다.');
  } else if (_.isNaN(Number(dates[0])) || _.isNaN(Number(dates[1])) || _.isNaN(Number(dates[2]))) {
    logger.error('[ERROR] Invalid date query string.');
    throw new BadRequestError('잘못된 날짜입니다.');
  } else {
    return dates;
  }
}

function seatNumberValidator (seatNumber) {
  const num = Number(seatNumber);

  if (_.isNaN(num)) {
    logger.error('[ERROR] Invalid seat number query string.');
    throw new BadRequestError('잘못된 좌석 번호입니다.');
  }

  if (num < 1 || num > 20) {
    logger.error('[ERROR] Invalid seat number query string.');
    throw new BadRequestError('잘못된 좌석 번호입니다.');
  }

  return num;
}

module.exports = {
  dateValidator: dateValidator,
  seatNumberValidator: seatNumberValidator
};
