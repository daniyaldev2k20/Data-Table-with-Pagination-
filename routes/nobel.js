const express = require('express');
const nobelController = require('../controllers/nobel-controller');

const router = express.Router();

router.get('/allNobels', nobelController.getAllNobels);

module.exports = router;