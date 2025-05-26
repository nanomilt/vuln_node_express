const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (_req, _res, _next) => {
  res.render('index', { title: 'VulnyJS' });
});

module.exports = router;