var express = require('express');
var router = express.Router();

'use strict';

const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

async function search (indexName, searchField, searchValue) {
  const { body } = await client.search({
    index: indexName,
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      query: {
        match: { indicator_name_rus: searchValue }
      }
    }
  });

  console.log(body.hits.hits)
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/search', function(req, res, next) {
  console.log(req.body.index_name);
  console.log(req.body.search_string);
  search(req.body.index_name, req.body.search_field, req.body.search_value).catch(console.log);
  res.render('search', { title: 'Search data' });

});

module.exports = router;
