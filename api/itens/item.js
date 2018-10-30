const restful = require('node-restful')
const mongoose = restful.mongoose

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, min: 1200, max: 2800, required: true }
  })

module.exports = restful.model('Item', itemSchema)