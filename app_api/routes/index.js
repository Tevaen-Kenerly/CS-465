const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router.route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripAdd);

router.route('/trips/:tripCode')
    .get(tripsController.tripFindByCode)
    .put(tripsController.tripUpdateOne)
    .delete(tripsController.tripDeleteOne);

module.exports = router;