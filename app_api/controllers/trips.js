const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find().exec();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET one trip
const tripFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.tripCode).exec();

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        res.status(200).json(trip);

    } catch (err) {
        res.status(500).json(err);
    }
};

// POST
const tripAdd = async (req, res) => {
    try {
const trip = await Trip.create({
    name: req.body.name,
    destination: req.body.destination,
    length: Number(req.body.duration),
    price: Number(req.body.price),
    description: req.body.description
});

        res.status(201).json(trip);

    } catch (err) {
        res.status(400).json(err);
    }
};

// PUT
const tripUpdateOne = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.tripCode).exec();

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        trip.name = req.body.name;
        trip.destination = req.body.destination;
        trip.length = Number(req.body.duration);
        trip.price = Number(req.body.price);
        trip.description = req.body.description;

        await trip.save();

        res.status(200).json(trip);

    } catch (err) {
        console.error("UPDATE ERROR:", err);
        res.status(400).json(err);
    }
};

// DELETE
const tripDeleteOne = async (req, res) => {

    try {

        await Trip.findByIdAndDelete(req.params.tripCode);

        res.status(204).json(null);

    } catch (err) {
        res.status(500).json(err);
    }

};

module.exports = {
    tripsList,
    tripFindByCode,
    tripAdd,
    tripUpdateOne,
    tripDeleteOne
};