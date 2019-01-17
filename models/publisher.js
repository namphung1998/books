const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  country: String
});

module.exports = mongoose.model('Publisher', schema);