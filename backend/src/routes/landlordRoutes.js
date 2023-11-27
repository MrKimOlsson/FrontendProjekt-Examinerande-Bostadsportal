const router = require('express').Router();
const { getLandlord } = require('../controllers/landlordController')

// router.get('/', getLandlords);
router.get('/:landlordId', getLandlord);

module.exports = router;