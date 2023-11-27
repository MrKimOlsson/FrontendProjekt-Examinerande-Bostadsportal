const router = require('express').Router();
const { getApplications, getApplication, addApplication, deleteUnitFromApplication } = require('../controllers/applicationsController')
const { verifyToken, checkAdmin } = require('../auth/auth')

router.get('/:applicationId', getApplication);
router.delete('/:userId/units/:applicationId', deleteUnitFromApplication);
router.get('/', getApplications);
router.post('/add', addApplication);


module.exports = router;