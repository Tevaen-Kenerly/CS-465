const express = require('express');
const router = express.Router();

const travelController = require('../controllers/traveller');

// HOME PAGE
router.get('/', (req, res) => {
    res.render('index', { title: 'Travlr Getaways' });
});

// TRAVEL PAGE (MVC ROUTE)
router.get('/travel', travelController.travelList);

module.exports = router;
