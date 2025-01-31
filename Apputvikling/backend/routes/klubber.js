const express = require('express');

const {
  createKlubb,
  getKlubber,
  getKlubb,
  deleteKlubb,
  updateKlubb,
} = require('../controllers/klubbController');

const router = express.Router();

// GET alle klubber
router.get('/', getKlubber);

// GET en enkelt klubb
router.get('/:id', getKlubb);

// POST en ny klubb
router.post('/', createKlubb);

// DELETE en ny klubb
router.delete('/:id', deleteKlubb);

// UPDATAT en ny klubb
router.patch('/:id', updateKlubb);

module.exports = router;
