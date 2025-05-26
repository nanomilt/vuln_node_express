const express = require('express');

const router = express.Router();
const searchService = require('../service/search');

/* GET search listing. */
router.get('/', (_, res) => {
  res.render('search', {title: 'Search for items'});
});

router.post('/', (req, res) => {
  const searchText = req.body.searchText;

  searchService.searchByName(searchText, (err, ret) => {
    if (err) {
      res.redirect('/search');
    } else {
      res.render('searchResult', ret);
    }
  });
});

module.exports = router;