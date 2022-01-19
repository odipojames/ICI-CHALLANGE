const express = require('express')
const router = express.Router()
const drugController = require('../controllers/drug.controller');

// Retrieve all drugs
router.get('/', drugController.findAll);

// Create a new drugs
router.post('/', drugController.create);

// Retrieve a single drug with id
router.get('/:id', drugController.findById);

// Update a drug with id
router.put('/:id', drugController.update);

// Delete a drug with id
router.delete('/:id', drugController.delete);

module.exports = router