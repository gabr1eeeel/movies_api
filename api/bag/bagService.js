const Bag = require('./bag');

Bag.methods(['get', 'post', 'put', 'delete']);

Bag.updateOptions({new: true, runValidators: true});

module.exports = Bag