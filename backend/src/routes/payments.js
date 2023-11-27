const router = require('express').Router();
const { addPayment } = require('../controllers/paymentController')
// const { verifyToken, checkAdmin } = require('../auth/auth')

router.post('/add', addPayment);


module.exports = router;