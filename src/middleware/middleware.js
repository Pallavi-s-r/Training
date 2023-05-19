 const UserModel = require('../model/model');

const authenticateUser = (req, res, next) => {
const isAuthenticated = false;
  if (isAuthenticated) {
    next(); // User is authenticated, proceed to the next middleware or route handler
  } else {
    res.status(401).send({ error: 'Unauthorized' });
  }
};
module.exports.authenticateUser = authenticateUser;