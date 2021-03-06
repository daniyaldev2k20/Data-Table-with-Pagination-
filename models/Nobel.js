const mongoose = require("mongoose");

const nobelSchema = new mongoose.Schema({
  firstname: { type: String },
  surname: { type: String },
  born: { type: String },
  died: { type: String },
  bornCountry: { type: String },
  bornCountryCode: { type: String },
  bornCity: { type: String },
  diedCountry: { type: String },
  diedCountryCode: { type: String },
  diedCity: { type: String },
  gender: { type: String },
  prizes: [],
});

const Nobel = mongoose.model('nobel', nobelSchema);
module.exports = Nobel;