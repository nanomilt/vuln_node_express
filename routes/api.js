const express = require('express');

const router = express.Router();
const searchService = require('../service/search');

router.get('/search', (_, res, __) => {

  const searchText = _.query.searchText !== undefined ? _.query.searchText : '';
  console.log(_.query);
  console.log(`search text: ${ searchText}`);
  searchService.searchByName(searchText, (err, ret) => {
    if (err) {
      res.json(err);
    } else {
      delete ret.searchText;
      res.json(ret);
    }
  });

});

module.exports = router;
