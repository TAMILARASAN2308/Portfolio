const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

router.post('/contact', userControllers.contact);

module.exports = router;