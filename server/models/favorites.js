module.exports = function(sequelize, Sequelize){
  const model = sequelize.define('favorite', {
    question_id: Sequelize.INTEGER,
    link: Sequelize.TEXT,
    title: Sequelize.TEXT,
    answer_count: Sequelize.INTEGER,
    tags: Sequelize.ARRAY(Sequelize.TEXT)
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
