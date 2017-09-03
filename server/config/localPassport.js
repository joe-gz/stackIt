const LocalStrategy = require('passport-local').Strategy;
const DB = require('../db/connection');
const User = DB.models.User;
const bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, username, password, callback) {
    // Find a user with this e-mail
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user){
      if(!user){
        User.create({
          username: req.body.username,
          password: bcrypt.hashSync(req.body.password)
        }).then(function(user){
          console.log('SUCCESS USERRR', user);
          return callback(null, user);
          // passport.authenticate("local", {failureRedirect:"/signup", successRedirect: "/posts"})(req, res, next)
        });
      } else {
        return callback(null, 'User exists');
      }
    });
  })
);

  passport.use('local-login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, username, password, done) {

    // Search for a user with this username
    User.findOne({
      where: {
        username: username
      }
    }).then(function(user, err){
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!bcrypt.compareSync(password, user.password)){
        return done(null, false);
      }
        return done(null, user);
      });
    })
  );
};
