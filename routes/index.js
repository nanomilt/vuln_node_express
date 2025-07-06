const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (_, res, __) => {
  res.render('index', { title: 'VulnyJS' });
});

module.exports = router;