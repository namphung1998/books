const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  price: { type: Number, required: true },
  publicationYear: Number,
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  imageUri: { type: String, required: true }
});

module.exports = mongoose.model('Book', schema);