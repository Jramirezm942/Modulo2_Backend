const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.send({title:'Ya estás'});
});

module.exports = router;
