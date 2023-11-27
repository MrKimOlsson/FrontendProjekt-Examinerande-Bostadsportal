const router = require('express').Router();
const { addUser, login, logout, getLoggedInUser, deleteUser, updateUser, getUsers, addAdmin } = require('../controllers/userController')
const { verifyToken, checkAdmin } = require('../auth/auth')

router.post('/add', addUser);
router.post('/login', login);
router.post('/logout', logout);
router.get('/', getUsers);
router.delete('/:id', verifyToken, checkAdmin, deleteUser);
router.put('/:id', verifyToken, checkAdmin, updateUser);
router.post('/newadmin', addAdmin)
router.get('/me', verifyToken, getLoggedInUser);

module.exports = router;