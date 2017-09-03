module.exports = function(sequelize, Sequelize){
  const model = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
  })
  return model;
}
