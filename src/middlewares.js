// Middleware function for log request with info about request URL
const log = (req, res, next) => {
  console.log(req.url);
  next();
};

// Function to check if the parameter length in URL is greater than 6 characters
const checkSize = (req, res, next) => {
  if (req.params.param.length > 6) {
    return res.status(403).send('Parameter has more than 6 characters');
  }
  next();
};

export { log, checkSize };
