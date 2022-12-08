const { Router } = require('express');
const Posts = require('../models/Post');
const authenticate = require('../middleware/authenticate');

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const posts = await Posts.getAll();
      return res.json(posts);
    } catch (err) {
      next(err);
    }
  });
