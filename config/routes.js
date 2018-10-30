const express = require('express');
const itemQuerys = require('../api/itens/itemQuerys');

module.exports = function(server) {

  const router = express.Router();
  server.use('/api', router);

  const itemService = require('../api/itens/itemService');
  itemService.register(router, '/item');

  router.get('/search-name/:name', itemQuerys.searchByName);

  const bagService = require('../api/bag/bagService');
  bagService.register(router, '/bag');

}