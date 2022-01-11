const router = require('express').Router()
const { Post, User, Comments } = require('../models')
const passport = require('passport')


router.get('/comments', passport.authenticate('jwt'), async function (req, res) {
  const comment = await Comments.find({}).populate('user post')
  res.json(comment)
})

//post comment

router.post('/comments', passport.authenticate('jwt'), async function (req, res) {
  const comment = await Comments.create({
    ...req.body, user: req.user._id ,  post:req.body.postid
    })
  res.json(comment)
})

module.exports= router