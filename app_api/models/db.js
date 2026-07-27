const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/travlr';

mongoose.connect(dbURI)
  .then(() => {
    console.log(`Mongoose connected to ${dbURI}`);
  })
  .catch((err) => {
    console.log('Mongoose connection error:', err);
  });

// Trip Schema
const tripSchema = new mongoose.Schema({
  name: String,
  destination: String,
  duration: String,
  price: String,
  description: String
});

// Register model
mongoose.model('trips', tripSchema);
