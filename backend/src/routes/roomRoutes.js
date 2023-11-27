const router = require('express').Router();
const { getRooms, getRoom } = require('../controllers/roomController')
const { verifyToken, checkAdmin } = require('../auth/auth')

router.get('/', getRooms);
router.get('/:roomId', getRoom);

module.exports = router;