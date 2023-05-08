const express = require('express');
const router = express.Router();

const CommonController= require("../controllers/commonController")

const CommonMiddleware = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct",CommonController.createProduct  );
router.post("/createUser",CommonController.createUser  )
// router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)
router.post("/createOrder", CommonMiddleware.headerValidation,CommonController.createOrder  );
module.exports = router;