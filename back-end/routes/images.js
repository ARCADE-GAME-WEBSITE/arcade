const express = require('express');
const imageController = require('../controllers/image.controller');
const userImageUploader = require('../helpers/user-image-uploader');
const gameAvatarUploader = require('../helpers/game-avatar-uploader');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/upload/user', checkAuth.checkAuth, userImageUploader.upload.single('user-image'), imageController.upload);
router.post('/upload/game/:id', checkAuth.checkAuth, gameAvatarUploader.upload.single('game-avatar'), imageController.upload);
router.post('/upload/game/:id', checkAuth.checkAuth, gameAvatarUploader.upload.array('game-play-image', 10), imageController.upload);

module.exports = router;