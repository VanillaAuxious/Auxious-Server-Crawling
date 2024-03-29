const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
  },
  coordinates: {
    type: [Number],
  },
});

const ForsaleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  squareMeters: {
    type: String,
  },
  price: {
    type: String,
  },
  coords: {
    type: pointSchema,
    index: '2dsphere',
  },
});

module.exports = mongoose.model('Forsale', ForsaleSchema);
