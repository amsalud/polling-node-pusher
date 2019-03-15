const express = require('express');
const router = express.Router();

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
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });

  return res.json({ success: true, message: 'Thank you for voting' });
});

module.exports = router;
