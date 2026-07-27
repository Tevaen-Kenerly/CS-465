const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
}, {
  collection: 'trips'
});

mongoose.model('Trip', tripSchema);
