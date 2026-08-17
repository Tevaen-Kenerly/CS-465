const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const ctrlAuth = require('../controllers/authentication');
const auth = require('../middleware/auth');

router.route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripAdd);

router.route('/trips/:tripCode')
    .get(tripsController.tripFindByCode)
    .put(auth, tripsController.tripUpdateOne)
    .delete(auth, tripsController.tripDeleteOne);

router.post('/login', ctrlAuth.login);

module.exports = router;