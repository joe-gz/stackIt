const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./server/config/routes');
const passport = require('passport');
const configurePassport = require('./server/config/localPassport');
const session = require('express-session');
const port = 3001 || process.env.PORT;

//****After running your build, uncomment this to launch the react fromtend with your node backend
// app.use(express.static(__dirname+ '/build'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(session({ secret: 'SOCIALTABLES-SESSION' }));
app.use(passport.initialize());
app.use(passport.session());
configurePassport(passport);

app.use(routes)

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
