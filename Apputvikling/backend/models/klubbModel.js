const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const klubbSchema = new Schema(
  {
    klubbNavn: {
      type: String,
      required: true,
    },
    lokasjon: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    kontaktPerson: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Klubb', klubbSchema);
