const express = require("express");
var itemsRouter = require('./ItemsController/items.router');

var router = express.Router();

router.get('/', (req, res) => {
  res.send('Invalid URI');
});

router.use('/items/', itemsRouter);

module.exports = router;