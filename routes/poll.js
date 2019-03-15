const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');

const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '736401',
  key: 'bacf49254b65677e71f3',
  secret: 'e4d082aff25aa4bb7b1b',
  cluster: 'us2',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('POLL');
});

router.post('/', (req, res) => {
  const newVote = {
    os: req.body.os,
    points: 1
  };

  new Vote(newVote).save().then(vote => {
    pusher.trigger('os-poll', 'os-vote', {
      points: parseInt(vote.points),
      os: vote.os
    });
    return res.json({ success: true, message: 'Thank you for voting' });
  });
});

module.exports = router;
