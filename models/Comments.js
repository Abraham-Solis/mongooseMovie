const { Schema, model } = require('mongoose')

const Comments = new Schema({
  body:{
    type: String, 
    required: true
  }
}) ({timestaps: true})

module.exports = model('comments', Comments)