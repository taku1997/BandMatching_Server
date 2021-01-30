const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

router.get('/signin',authController.signin);
router.get('/signup',authController.signup);

module.exports = router;


