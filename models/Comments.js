const { Schema, model } = require('mongoose')

const Comments = new Schema({
  body:{
    type: String, 
    required: true
  }, 
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  posts: {
    type: Schema.Types.ObjectId
    ref: 'post'
    required: true
  }
}, {timestaps: true})

module.exports = model('comments', Comments)