const headerValidation = async function (req, res, next) {
    const isFreeAppUser = req.headers.isfreeappuser; // false
    const body = req.body;
  
    if (isFreeAppUser) {
      if (isFreeAppUser == "true") {
        body.isFreeAppUser = true;
      } else {
        body.isFreeAppUser = false;
      }
      next();
    } else {
      res.send({ msg: "the request is missing a mandatory header." });
    }
  };
  
  module.exports.headerValidation = headerValidation;
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const abc = function(req, res, next) {
    //get the users IP
    //save it in db
    // console log
    next()
}

const def = function(req, res, next) {
   //get the users IP
   //save it in db
   // console log
   next()
}

const xyz = function(req, res, next) {
   //get the users IP
   //save it in db
   // console log
   next()
}



module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.abc = abc
