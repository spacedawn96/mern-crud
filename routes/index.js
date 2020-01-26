const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const auth = require('../middleware/auth');
const User = require('../models/User');

router.get('/', (req, res) => {
  Post.find((err, post) => {
    res.json(post);
  });
});

router.get('/:id', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (!post) {
      res.status(404).send('No result found');
    } else {
      res.json(post);
    }
  });
});

router.post('/', auth, (req, res) => {
  const post = new Post(req.body);
  post
    .save()
    .then(post => {
      res.send(post);
    })
    .catch(err => {
      res.status(422).send('add failed');
    });
});

router.patch('/:id', auth, (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json('updated');
    })
    .catch(err => {
      res.status(422).send('update failed.');
    });
});

router.delete('/:id', auth, (req, res) => {
  Post.findById(req.params.id, function(err, post) {
    if (!post) {
      res.status(404).send('post not found');
    } else {
      Post.findByIdAndRemove(req.params.id)
        .then(function() {
          res.status(200).json('post deleted');
        })
        .catch(function(err) {
          res.status(400).send('post delete failed.');
        });
    }
  });
});

module.exports = router;
