const router = require('express').Router();
const { getApartments, getApartment } = require('../controllers/apartmentsController')
const { verifyToken, checkAdmin } = require('../auth/auth')

router.get('/', getApartments);
router.get('/:apartmentId', getApartment);

module.exports = router;