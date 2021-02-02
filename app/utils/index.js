class CustomError extends Error {
  timeStamp;
  status;

  constructor(status = 0, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.timeStamp = new Date();
    this.status = status;
  }
}

export const HttpError = (status, message) => {
  return new CustomError(status, message);
};
