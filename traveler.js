const express = require('express');
const router = express.Router();
const travelerController = require('../controllers/traveler');

router.get('/', travelerController.index);

module.exports = router;
