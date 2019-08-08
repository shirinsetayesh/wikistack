const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {

  res.send('hello get page');

})

router.post('/', (req, res, next) => {

  res.send('hello post page ');

})

router.get('/add', (req, res, next) => {

  res.send('got to wiki/add page');

})


module.exports = router;
