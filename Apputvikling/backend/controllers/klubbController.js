const Klubb = require('../models/klubbModel');
const mongoose = require('mongoose');

// hente alle klubber
const getKlubber = async (req, res) => {
  const klubber = await Klubb.find({}).sort({ createdAt: -1 });

  res.status(200).json(klubber);
};

// hente en enkelt klubb via id
const getKlubb = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Ingen klubb' });
  }

  const klubb = await Klubb.findById(id);

  if (!klubb) {
    return res.status(400).json({ error: 'Ingen klubb' });
  }

  res.status(200).json(klubb);
};

// lage en klubb
const createKlubb = async (req, res) => {
  const { klubbNavn, lokasjon, mail, kontaktPerson } = req.body;

  // legge til en doc til databasen
  try {
    const klubb = await Klubb.create({
      klubbNavn,
      lokasjon,
      mail,
      kontaktPerson,
    });
    res.status(200).json(klubb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// slette en klubb
const deleteKlubb = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Ingen klubb' });
  }

  const klubb = await Klubb.findOneAndDelete({ _id: id });

  if (!klubb) {
    return res.status(400).json({ error: 'Ingen klubb' });
  }

  res.status(200).json(klubb);
};

// oppdatere en klubb
const updateKlubb = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Ingen klubb' });
  }

  const klubb = await Klubb.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!klubb) {
    return res.status(400).json({ error: 'Ingen klubb' });
  }
  res.status(200).json(klubb);
};

module.exports = {
  createKlubb,
  getKlubber,
  getKlubb,
  deleteKlubb,
  updateKlubb,
};
