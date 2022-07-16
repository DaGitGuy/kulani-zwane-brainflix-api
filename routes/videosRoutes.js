const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController');

// GET /videos
router.get('/', videosController.getAllVids);

// GET /videos/:videoId
router.get('/:videoId', videosController.getIndividualVid);

// POST /videos
router.post('/', videosController.createVid);

module.exports = router;
