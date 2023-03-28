const express = require('express');
const router = express.Router();
const { createUser, loginCtrl, getAllUsers, getAUser, deleteUser, updatedUser, blockUser, unblockUser } = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware.js');


router.post('/register', createUser)
router.post('/login', loginCtrl)
router.get('/all-users', authMiddleware, isAdmin, getAllUsers)
router.get('/:id', authMiddleware, isAdmin, getAUser)
router.delete('/:id', deleteUser)
router.put('/edit-user', authMiddleware, updatedUser)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)


module.exports = router;