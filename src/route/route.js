const express = require('express');
const router = express.Router();
const Ctrl = require('../controller/controller');
const Mid =  require('../middleware/middleware');

router.post('/customer',Mid.errorHandler,Ctrl.createCustomer);
router.post('/card',Mid.errorHandler,Ctrl.createCard);
router.get('/customerData',Mid.errorHandler,Ctrl.getCustomer);
router.get('/cardData',Mid.errorHandler,Ctrl.getCard);
router.delete('/delCustomer',Mid.errorHandler,Ctrl.delCustomer);
module.exports = router;