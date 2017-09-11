const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres:///socialtables_challenge');
const Favorite = sequelize.import('../models/favorites');
const User = sequelize.import('../models/user');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  Favorite.belongsTo(User);
  User.hasMany(Favorite);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    Favorite: Favorite,
    User: User
  }
}
