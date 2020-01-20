const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/post', (req, res) => {
  Post.find((err, post) => {
    res.json(post);
  });
});

router.get('/post/:id', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (!post) {
      res.status(404).send('No result found');
    } else {
      res.json(post);
    }
  });
});

router.post('/post', (req, res) => {
  let post = new Post(req.body);
  post
    .save()
    .then(post => {
      res.send(post);
    })
    .catch(err => {
      res.status(422).send('add failed');
    });
});

router.patch('/post/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json('updated');
    })
    .catch(err => {
      res.status(422).send('update failed.');
    });
});

router.delete('/post/:id', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (!post) {
      res.status(404).send('post not found');
    } else {
      Post.findByIdAndRemove(req.params.id)
        .then(() => {
          res.status(200).json('post deleted');
        })
        .catch(err => {
          res.status(400).send('post delete failed.');
        });
    }
  });
});

module.exports = router;
