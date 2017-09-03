module.exports = function(sequelize, Sequelize){
  const model = sequelize.define('favorite', {
    text: Sequelize.STRING,
    value: Sequelize.INTEGER
  })
  // ,
  // {
  //   instanceMethods: {
  //     shout: function(){
  //       console.log('My name is ' + this.name);
  //     }
  //   }
  // }
  // );
  // model.sing = function(){
  //   console.log('Tra la la!');
  // }
  return model;
}
