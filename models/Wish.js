const mongoose = require('mongoose')

const WishSchema = new mongoose.Schema({
  wish: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  purchased: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Wish', WishSchema)