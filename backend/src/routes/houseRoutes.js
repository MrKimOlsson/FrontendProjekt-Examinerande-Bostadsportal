const router = require('express').Router();
const { getHouses, getHouse } = require('../controllers/houseController')
const { verifyToken, checkAdmin } = require('../auth/auth')

router.get('/', getHouses);
router.get('/:houseId', getHouse);

module.exports = router;