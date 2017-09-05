const express = require('express');
const DB = require('../db/connection');
const FavoriteModel = DB.models.Favorite;
const router = express.Router();
const Authenticate = require('../utils/authentication.utils.js');

const favoritesController = {};

favoritesController.getFavorites = function(req, res){
  console.log('PARAMSSS', req.params);
  console.log('all smaples for ' + req.params);
  console.log('SAMPLE USER', req.session.user);
  const userId = req.params.userId;
  const authenticated = Authenticate.authenticatedUser(req, userId)
  if (authenticated) {
    FavoriteModel.findAll({
      where: {
        userId: userId
      }
    }).then(favorites => {
      if (favorites.length === 0) {
        const emptyJSON = {
          text: 'Start creating some stuff!'
        };
        res.json(emptyJSON)
      } else {
        res.json(favorites)
      }
    }).catch(err => {
      console.log(err);
    });
  } else {
    res.json({error: 'Not logged in!'});
  }
}

favoritesController.getFavorite = function(req, res){
  console.log('single favorite');
  const userId = req.params.userId;
  const authenticated = Authenticate.authenticatedUser(req, userId)
  if (authenticated) {
    FavoriteModel.find({
      where: {
        id: req.params.id,
        userId: userId
      }
    }).then(favorite => {
      console.log(favorite)
      if (!favorite) {
        const emptyJSON = {
          text: 'Start creating some stuff!'
        };
        res.json(emptyJSON)
      } else {
        res.json(favorite)
      }
    }).catch(err => {
      console.log(err);
    });
  } else {
    res.json({error: 'Not logged in!'});
  }
}

favoritesController.createFavorite = function (req, res) {
  console.log(req.body);
  console.log(req.session);
  const userId = req.params.userId;
  const authenticated = Authenticate.authenticatedUser(req, userId)
  if (authenticated) {
    FavoriteModel.create({
      question_id: req.body.data.question_id,
      title: req.body.data.title,
      link: req.body.data.link,
      answer_count: req.body.data.answer_count,
      tags: req.body.data.tags,
      userId: req.session.user.id
    }).then(favorite => {
      res.json(favorite)
    }).catch(err => {
      console.log('Could not create!', err);
    });
  } else {
    res.json({error: 'Not logged in!'});
  }
}

favoritesController.deleteFavorite = function (req, res) {
  const userId = req.params.userId;
  const authenticated = Authenticate.authenticatedUser(req, userId)
  if (authenticated) {
    FavoriteModel.destroy({
      where: {
        id: req.params.id,
        userId: userId
      }
    }).then(favorite => {
      res.json({
        text: 'that favorite has been destroyed'
      })
    }).catch(err => {
      console.log('Could not delete!', err);
    });
  } else {
    res.json({error: 'Not logged in!'});
  }
}

favoritesController.getUserInfo = function (req, res) {
  console.log(req.session.user);
  if (req.session.user) {
    FavoriteModel.findAll({
      where: {
        userId: req.session.user.id
      }
    }).then(favorites => {
      const jsonResponse = {
        user: req.session.user,
        favorites: favorites
      }
      res.json(jsonResponse);
    }).catch(err => {
      res.json(err)
    });
  } else {
    res.json(false);
  }
}

module.exports = favoritesController;
