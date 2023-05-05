const loggingMiddleware = async (req, res, next) =>{
    const date = new Date().toISOString(); // current timestamp as date time
    const ip = req.ip; // IP of the user
    const route = req.originalUrl; // route being requested
  
    console.log(`${date} , ${ip} , ${route}`);
    next();
  }
  
  module.exports.loggingMiddleware = loggingMiddleware;