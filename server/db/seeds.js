const DB = require("../db/connection");
const bcrypt = require('bcrypt-nodejs');
const FavoriteModel = DB.models.Favorite;
const UserModel = DB.models.User;

UserModel.create({
  username: 'test@mail.com',
  password: bcrypt.hashSync('test123')
}).then(user => {
  console.log('Seed created!', user);
  // FavoriteModel.create({
  //   question_id: 'favorite 1',
  //   value: 10,
  //   userId: user.id
  // }).then(seed => {
  //   console.log('Seed created!', seed);
  // });
  //
  // FavoriteModel.create({
  //   text: 'favorite 2',
  //   value: 11,
  //   userId: user.id
  // }).then(seed => {
  //   console.log('Seed created!', seed);
  // });
});
