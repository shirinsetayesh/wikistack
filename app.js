const express = require('express');
const morgan = require('morgan');
const {
  db
} = require('./models');
const models = require('./models/index.js');
const userRoute = require('./routes/user');
const wikiRoute = require('./routes/wiki');
const app = express();
const PORT = 3000;

app.use('/wiki', wikiRoute);

//parses url encoded bodies
app.use(express.urlencoded({
  extended: false
}));

app.use(morgan('dev'));

//routes all the classes in the public folder
app.use(express.static(__dirname + '/public'));

const init = async () => {
  await models.User.sync();
  await models.Page.sync();
  app.listen(5432, () => {
    console.log(`Server is listening on Port 5432`);
  })
}

init();
models.db.sync({
  force: true
});


app.get('/', (req, res, next) => {
  res.redirect('/wiki');
})

db.authenticate().then(() => {
  console.log('connected to the database');
})

app.listen(3000, function () {
  console.log(`Listening on port: ${PORT}`); //left off here****
})
