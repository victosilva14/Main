const express = require('express');
const { register, login, deleteUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/delete/:userId', deleteUser);

module.exports = router;
