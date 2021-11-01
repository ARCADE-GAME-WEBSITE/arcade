const express = require('express');
const userController = require('../controllers/user.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.login);
router.get('/', checkAuthMiddleware.checkAuth, userController.index); 
router.get('/:id', checkAuthMiddleware.checkAuth, userController.show);
router.patch('/:id', checkAuthMiddleware.checkAuth, userController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, userController.destroy);
router.get('/get-list-friend/:id', checkAuthMiddleware.checkAuth, userController.getListFriendsByEmails);
router.post("/forgot-password", userController.forgot);
router.post("/change-password/:id", checkAuthMiddleware.checkAuth, userController.changePassword);

module.exports = router;