export const createError = (sta, message) => {
  const err = new Error();
  err.status = sta;
  err.message = message;
  return err;
};
