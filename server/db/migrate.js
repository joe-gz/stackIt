const DB = require("./connection");

DB.sequelize.sync({force: true}).then(function(){
  console.log('DB has been synced!');
  process.exit();
});
