const express = require('express');
const router = express.Router();
const { createUser, loginCtrl, getAllUsers, getAUser, deleteUser, updatedUser } = require("../controller/userCtrl");
const authMiddleware = require('../middleware/authMiddleware.js');


router.post('/register', createUser)
router.post('/login', loginCtrl)
router.get('/all-users', getAllUsers)
router.get('/:id', authMiddleware, getAUser)
router.delete('/:id', deleteUser)
router.put('/:id', updatedUser)


module.exports = router ;