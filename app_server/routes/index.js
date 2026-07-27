const express = require('express');
const router = express.Router();

const travelController = require('../controllers/traveller');

router.get('/', (req, res) => {
  res.render('index', { title: 'Travlr Getaways' });
});

router.get('/trips', travelController.travellist);

module.exports = router;
