const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
    .get('/', controller.getAllFlights)
    .post('/', controller.createFlight)
    .get('/:id', controller.getFlight)
    .put('/:id', controller.updateFlight)
    .delete('/:id', controller.deleteFlight)

module.exports = router;

