var express = require('express');
var router = express.Router();

var favoritesController = require('../controllers/favoritesController');
var userController = require('../controllers/userController');

// favorites:
router.get('/favorites/:userId', favoritesController.getFavorites);
router.get('/favorite/:id', favoritesController.getFavorite);
router.post('/create/:userId', favoritesController.createFavorite);
router.delete('/delete/:id/:userId', favoritesController.deleteFavorite);
router.get('/get-user', favoritesController.getUserInfo);

// users:
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/signout', userController.signout);

module.exports = router;
