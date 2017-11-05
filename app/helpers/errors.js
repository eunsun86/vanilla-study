const NOT_FOUND = '페이지를 찾을 수 없습니다.';
const UNAUTHORIZED = '허용되지 않은 요청입니다.';
const SERVER_ERROR = '서버에 오류가 있습니다.';
const BAD_REQUEST = '잘못된 요청입니다.';

class VanillaStudyError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

class NotFoundError extends VanillaStudyError {
  constructor(message) {
    super(404, message || NOT_FOUND);
  }
}

class UnauthorizedError extends VanillaStudyError {
  constructor(message) {
    super(401, message || UNAUTHORIZED);
  }
}

class ServerError extends VanillaStudyError {
  constructor(message) {
    super(500, message || SERVER_ERROR);
  }
}

class BadRequestError extends VanillaStudyError {
  constructor(message) {
    super(400, message || BAD_REQUEST);
  }
}


module.exports = {
  NotFoundError: NotFoundError,
  UnauthorizedError: UnauthorizedError,
  ServerError: ServerError,
  BadRequestError: BadRequestError
};
