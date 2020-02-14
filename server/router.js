const express = require('express');
const { getShort, createShort, getPopular } = require('./controllers');

const router = express.Router();

router.get('/urls/:short', getShort);
router.post('/new', createShort);
router.get('/popular', getPopular);
router.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
