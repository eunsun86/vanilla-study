const _ = require('lodash');
const logger = require('../helpers/logger');
const { BadRequestError } = require('../helpers/errors');

function dateValidator (date) {
  var dates = date.split('-') || [];

  if (dates.length !== 3) {
    logger.error('[ERROR] Invalid date query string.');
    throw new BadRequestError('잘못된 날짜입니다.');
  } else if (!_.isNumber(Number(dates[0])) || !_.isNumber(Number(dates[1])) || !_.isNumber(Number(dates[2]))) {
    logger.error('[ERROR] Invalid date query string.');
    throw new BadRequestError('잘못된 날짜입니다.');
  } else {
    return dates;
  }
}

module.exports = {
  dateValidator: dateValidator
};
