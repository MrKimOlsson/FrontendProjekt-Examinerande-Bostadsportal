const router = require('express').Router();
const { getCollectives, getCollective } = require('../controllers/collectivesController')
// const { verifyToken, checkAdmin } = require('../auth/auth')

router.get('/', getCollectives);
router.get('/:collectiveId', getCollective);

module.exports = router;